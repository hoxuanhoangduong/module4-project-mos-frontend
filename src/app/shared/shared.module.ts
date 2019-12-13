import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CardComponent} from './card/card.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {FooterComponent} from './footer/footer.component';
import {ModalComponent} from './modal/modal.component';


@NgModule({
  declarations: [NavbarComponent,
    SidebarComponent,
    CardComponent,
    SpinnerComponent,
    FooterComponent,
    ModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent,
    SidebarComponent,
    CardComponent,
    SpinnerComponent,
    FooterComponent,
    ModalComponent]
})
export class SharedModule {
}
