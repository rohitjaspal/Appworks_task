import { HomeTransactionPageComponent } from './home-transaction-page/home-transaction-page.component';
import { Injectable } from '@angular/core';
import { NewTransactionPageComponent } from './new-transaction-page/new-transaction-page.component';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private home: HomeTransactionPageComponent , private transaction: NewTransactionPageComponent) { }

putdata(){
}

}
