import { Injectable } from "@angular/core";

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import {SharingService} from '../sharing/sharing.service'
//import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from "../user/user.service";
@Injectable({
	providedIn: 'root'
})
export class AuthService {
    public user: any;
		constructor(
		   private afAuth: AngularFireAuth,
		   private router:Router,
       private dataSharingService:SharingService,
       private userService: UserService
		){
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
          console.log('login success! ' + this.user.displayName);
        } else {
          localStorage.setItem('user', "");
        }
      });
    }
    
		async signinGmail(){
			var provider = new firebase.auth.GoogleAuthProvider();
			return await  this.afAuth.signInWithPopup(provider)
              .then(res=>{

                console.log(" da dang nhap thanh cong")
                this.dataSharingService.isUserLoggedIn.next(true);
				        this.router.navigate(['table']);
                // this.router.navigate(['home']);
				})
		}
    logout(){
			return new Promise<any>(async (resolve,reject)=>{
			  if (await this.afAuth.currentUser){	  
				this.afAuth.signOut();
        this.dataSharingService.isUserLoggedIn.next(false)
        localStorage.setItem('user', JSON.stringify(''));

        this.user = null
        console.log(this.dataSharingService.isUserLoggedIn.value)
				resolve("log out");
			  }else{
				reject();
			  }
			})
		}

    isLogIn(){
      this.userService.getCurrentUser()
          .then(user => {
            if (user) {
              return true
            }return false
          }
          ).catch(e => { console.log(e); });
    }
	
}