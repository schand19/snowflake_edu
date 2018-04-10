import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentsListPage } from './students-list';

@NgModule({
  declarations: [
    StudentsListPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentsListPage),
  ],
})
export class StudentsListPageModule {}
