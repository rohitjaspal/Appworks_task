import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-transaction-page',
  templateUrl: './home-transaction-page.component.html',
  styleUrls: ['./home-transaction-page.component.css']
})
export class HomeTransactionPageComponent implements OnInit {
  credit: any;
  debit: any;
  runningbalance: any;
  date;
  description: any;
  rowData = [
    { Credit: this.credit, Debit: this.debit,
      RunningBalance: this.runningbalance,
      Date: this.date, Description: this.description },
  ];
  columnDefs = [
    {field: 'Date', sortable: true},
    {field: 'Description', sortable: true},
    {field: 'Credit' , sortable: true },
    {field: 'Debit', sortable: true },
    {field: 'Running Balance', sortable: true},
  ];
  items: [];
  constructor() { }

  ngOnInit(): void {
  }
  completedate(newdate){
    console.log(newdate);
  }

}
