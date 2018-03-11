import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DuesPage } from './dues';

@NgModule({
  declarations: [
    DuesPage,
  ],
  imports: [
    IonicPageModule.forChild(DuesPage),
  ],
})
export class DuesPageModule {}
