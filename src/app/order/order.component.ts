import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms'; 

import { Router } from '@angular/router';

import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from 'app/order/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from 'app/order/order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Refeição', value: 'REF'}
  ]

  delivery: number = 8;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder :FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('')
    })
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQuantity(item: CartItem) {
    this.orderService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.orderService.decreaseQuantity(item);
  }

  remove(item: CartItem) {
    this.orderService.removeItem(item);
  }

  checkOrder(order: Order) {
    // transforma uma array de cartItems em uma array de OrderItems e atribui no objeto de compra
    order.orderItems = this.cartItems().map( (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe( (orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear();
    })
  }

}
