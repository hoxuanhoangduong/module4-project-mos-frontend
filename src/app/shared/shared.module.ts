import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [NavbarComponent, SidebarComponent]
})
export class SharedModule {
}
