import { HomeTransactionPageComponent } from './home-transaction-page/home-transaction-page.component';
import { NewTransactionPageComponent } from './new-transaction-page/new-transaction-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeTransactionPageComponent
  },
  {
    path: 'newtransactionpage',
    component: NewTransactionPageComponent
  },
{
  path: '**',
  redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
