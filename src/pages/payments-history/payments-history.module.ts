import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsHistoryPage } from './payments-history';

@NgModule({
  declarations: [
    PaymentsHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsHistoryPage),
  ],
})
export class PaymentsHistoryPageModule {}
