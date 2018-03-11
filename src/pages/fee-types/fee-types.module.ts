import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeeTypesPage } from './fee-types';

@NgModule({
  declarations: [
    FeeTypesPage,
  ],
  imports: [
    IonicPageModule.forChild(FeeTypesPage),
  ],
})
export class FeeTypesPageModule {}
