import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeeDetailsPage } from './fee-details';

@NgModule({
  declarations: [
    FeeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeeDetailsPage),
  ],
})
export class FeeDetailsPageModule {}
