import { Component } from '@angular/core';
import { Ngconentex } from '../ngconentex/ngconentex';

@Component({
  imports: [Ngconentex],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  cartCount: any = 0;
  productList = [
    { name: 'Wireless Mouse', price: 25 },
    { name: 'Mechanical Keyboard', price: 120 },
    { name: 'HD Monitor', price: 300 },
    { name: 'USB-C Cable', price: 15 }
  ];
  handlechange(event:any){
    this.cartCount++;
  }
}
