import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  showInvoiceInfo: boolean = false;
  showMoreOptions: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleInvoiceInfo() {
    this.showInvoiceInfo = !this.showInvoiceInfo;
  }

  toggleOptions() {
    this.showMoreOptions = !this.showMoreOptions;
  }


}
