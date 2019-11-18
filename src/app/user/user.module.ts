import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserRoutingModule} from './user-routing.module';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {SharedModule} from '../shared/shared.module';
import {UpdateProfileComponent} from './update-profile/update-profile.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, UserComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [HomeComponent, LoginComponent, RegisterComponent, UserComponent, UpdateProfileComponent]
})
export class UserModule {
}
