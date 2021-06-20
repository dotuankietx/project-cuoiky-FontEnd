import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
    constructor(
      public authService: AuthService,
      private router: Router,     
      ){}
 
      tryGoogleLogin(){
       this.authService.signinGmail()
        .then(res=>{
          this.router.navigate([""]);

          }).catch(err=>{
            console.log(err); 
           
          })
      }	
}
