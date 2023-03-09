import { Component } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  invoiceForm:Invoice={

    id: 0 ,   
	total: 0,
    tax: 0,
    stamp: 0,
    date: new Date(),
    discount: 0,
    client:  {
      id: 0,
      nameClient: '',
      email:''
    } 

    
}
}
