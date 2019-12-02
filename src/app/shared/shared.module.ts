import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CardComponent} from './card/card.component';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent, CardComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [NavbarComponent, SidebarComponent, CardComponent]
})
export class SharedModule {
}
