import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
