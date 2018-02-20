import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HolidayCalenderPage } from './holiday-calender';

@NgModule({
  declarations: [
    HolidayCalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(HolidayCalenderPage),
  ],
})
export class HolidayCalenderPageModule {}
