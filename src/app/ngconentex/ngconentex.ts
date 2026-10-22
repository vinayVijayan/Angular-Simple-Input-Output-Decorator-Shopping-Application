import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.services';

@Component({
  imports: [],
  selector: 'app-ngconentex',
  styleUrl: './ngconentex.scss',
  templateUrl: './ngconentex.html',
})
export class Ngconentex {

  @Input() productname:string = ''
  @Input() price:number = 0
  constructor(private cartService: CartService){

  }
  buyItem(){
  this.cartService.addToCart();  
}
}
