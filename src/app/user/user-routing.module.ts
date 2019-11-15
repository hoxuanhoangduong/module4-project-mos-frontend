import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '', component: UserComponent, children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
