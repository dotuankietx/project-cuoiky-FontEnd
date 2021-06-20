import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { SharingService } from 'src/app/services/sharing/sharing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {


  user: any
  constructor(private router: Router, private userService: UserService, public fauthService: AuthService, private sharingService: SharingService) {
    
        this.userService.getCurrentUser()
          .then(user => {
            this.user = user;
          }
          ).catch(e => { console.log(e); });
      
     

  }

  ngOnInit(): void {
  }


  logout() {
    this.fauthService.logout();
    this.router.navigate(['/login'])
  }
}
