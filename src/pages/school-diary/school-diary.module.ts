import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolDiaryPage } from './school-diary';

@NgModule({
  declarations: [
    SchoolDiaryPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolDiaryPage),
  ],
})
export class SchoolDiaryPageModule {}
