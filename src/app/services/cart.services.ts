import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {

    private cartcountsubject = new BehaviorSubject<number>(0);
    cartcount$ = this.cartcountsubject.asObservable()

    addToCart(){
        debugger
        const cart = this.cartcountsubject.getValue()
        this.cartcountsubject.next(cart + 1)
    }
}