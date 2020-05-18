import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl, FormArrayName, FormGroupDirective, NgForm  } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-new-transaction-page',
  templateUrl: './new-transaction-page.component.html',
  styleUrls: ['./new-transaction-page.component.css']
})
export class NewTransactionPageComponent implements OnInit {
  Amount;
  Description;
  cards: string[] = ['credit', 'Debit'];
  public transactionFormGroup: FormGroup;
  submitted = false;
  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.transactionFormGroup = new FormGroup({
      Amount : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      Description : new FormControl('', [Validators.required, Validators.maxLength(200)]),
      cardtype: new FormControl('', [Validators.required])
    });
  }
  getErrorMessage() {
    if (this.Amount.hasError('required')) {
      return 'You must enter a value';
    }
  }
  ErrorMessage(){
    if (this.Description.hasError('required')) {
      return 'You must give description';
    }
  }
  onchangetype(e){
    console.log(e);
  }
  onSubmit(e){
    this.submitted = true;
    // tslint:disable-next-line: no-unused-expression
    console.log(this.transactionFormGroup.value);
    console.log(e);
  }
  close(){
  }

}
