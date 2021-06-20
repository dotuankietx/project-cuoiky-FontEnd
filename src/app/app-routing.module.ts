import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from '../app/services/auth-guard/auth-guard.service';
const routes: Routes = [
{ path: "", loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule),canActivate: [AuthGuard]  },
{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
