import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlineTeacherPage } from './online-teacher';

@NgModule({
  declarations: [
    OnlineTeacherPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineTeacherPage),
  ],
})
export class OnlineTeacherPageModule {}
