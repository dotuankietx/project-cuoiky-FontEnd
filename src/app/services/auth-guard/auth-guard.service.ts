import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {SharingService} from '../sharing/sharing.service'
import { UserService } from '../user/user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(public auth: AuthService, public router: Router, private userService: UserService) {}
  // canActivate() {
  //   if (!this.auth.isLogIn()) {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }else return true
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser().then(
        (user) => {
          console.log({ AuthGuard: true });
          resolve(true);
        },
        (err) => {
          console.log({ AuthGuard: false });
          resolve(false);
          this.router.navigate(['login']);
        }
      );
    });
  }
}
