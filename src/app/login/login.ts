import { Component } from '@angular/core';
import { Ngconentex } from '../ngconentex/ngconentex';
import { Subscription } from 'rxjs';
import { count } from 'console';
import { CartService } from '../services/cart.services';

@Component({
  imports: [Ngconentex],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  cartCount: any = 0;
  private cartsubscription!:Subscription;
  constructor(private cart :CartService){

  }
  productList = [
    { name: 'Wireless Mouse', price: 25 },
    { name: 'Mechanical Keyboard', price: 120 },
    { name: 'HD Monitor', price: 300 },
    { name: 'USB-C Cable', price: 15 }
  ];
  ngOnInit(){
    debugger
  this.cartsubscription = this.cart.cartcount$.subscribe(count=>{
    this.cartCount = count
  })
  }
  ngOnDestroy() {
    // Unsubscribe when leaving to prevent memory leaks
    this.cartsubscription?.unsubscribe();
  }
}
