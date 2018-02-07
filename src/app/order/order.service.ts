import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";

@Injectable() 
export class OrderService {

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    constructor(
        private cartService: ShoppingCartService
    ){}

    increaseQuantity(item: CartItem) {
        this.cartService.increaseQuantity(item);
    }

    decreaseQuantity(item: CartItem) {
        this.cartService.decreaseQuantity(item);
    }

    removeItem(item: CartItem) {
        this.cartService.removeItem(item);
    }


}