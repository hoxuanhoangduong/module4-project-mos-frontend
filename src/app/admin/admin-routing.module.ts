import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  // {
  //   path: 'ad',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '', component: AdminComponent, canActivateChild: [], children: [
      {path: 'dashboard', component: DashboardComponent},
      // tslint:disable-next-line:max-line-length
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
