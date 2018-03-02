import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarksheetPage } from './marksheet';

@NgModule({
  declarations: [
    MarksheetPage,
  ],
  imports: [
    IonicPageModule.forChild(MarksheetPage),
  ],
})
export class MarksheetPageModule {}
