import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { DeliveryCostsComponent } from './../delivery-costs/delivery-costs.component';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';

// rotas do módulo "OrderModule"
const ROUTES: Routes = [
    {path: '', component: OrderComponent}
];


@NgModule({
    declarations: [DeliveryCostsComponent, OrderComponent, OrderItemsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {

}