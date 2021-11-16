import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';
import { UiComponent } from './components/ui/ui.component';

@NgModule({
  declarations: [UiComponent],
  imports: [CommonModule, OrdersModule],
  exports: [UiComponent],
})
export class UiModule {}
