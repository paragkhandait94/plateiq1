import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {

  title = 'plateiq1';
  columnDefs = [
    {
      headerName: 'Item #',
      field: 'itemNumber',
    },
    {
      headerName: 'Quantity',
      field: 'quantity',
    },
    {
      headerName: 'Item Name/Description',
      field: 'itemName',
    },
    {
      headerName: 'Pack Size',
      field: 'size',
    },
    {
      headerName: 'Unit Price',
      field: 'unitPrice',
    },
    {
      headerName: 'Total',
      field: 'total',
    },
  ];

  defaultColDef= {
    width: 158
  };

  rowData = [
      { itemNumber: 'Toyota', quantity: 'Celica', itemName: 35000, size: '',unitPrice: '', total: '' },
      { itemNumber: 'Toyota', quantity: 'Celica', itemName: 35000, size: '',unitPrice: '', total: '' },
      { itemNumber: 'Toyota', quantity: 'Celica', itemName: 35000, size: '',unitPrice: '', total: '' },
      { itemNumber: 'Toyota', quantity: 'Celica', itemName: 35000, size: '',unitPrice: '', total: '' },
      { itemNumber: 'Toyota', quantity: 'Celica', itemName: 35000, size: '',unitPrice: '', total: '' }
  ];




}
