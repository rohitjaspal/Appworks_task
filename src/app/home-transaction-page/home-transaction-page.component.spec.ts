import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransactionPageComponent } from './home-transaction-page.component';

describe('HomeTransactionPageComponent', () => {
  let component: HomeTransactionPageComponent;
  let fixture: ComponentFixture<HomeTransactionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTransactionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
