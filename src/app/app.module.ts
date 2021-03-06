import { BrowserModule } from '@angular/platform-browser';
import {IonicImageViewerModule} from 'ionic-img-viewer';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { NgCalendarModule  } from 'ionic2-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { AttendancePage } from '../pages/attendance/attendance'
import { HomePage } from '../pages/home/home';
import { FeesPage } from '../pages/fees/fees';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { FindschoolPage } from '../pages/findschool/findschool';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { SchoolDiaryPage } from '../pages/school-diary/school-diary';
import { ImageGalleryPage } from '../pages/image-gallery/image-gallery';
import { LunchMenuPage } from '../pages/lunch-menu/lunch-menu';
import { ResultsPage } from '../pages/results/results';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { ViewAttendancePage } from '../pages/view-attendance/view-attendance';
import { HolidayCalenderPage } from '../pages/holiday-calender/holiday-calender';
import { OnlineTeacherPage } from '../pages/online-teacher/online-teacher';
import { MarksheetPage } from '../pages/marksheet/marksheet';
import { StudentsListPage } from '../pages/students-list/students-list';
import { StudentProfilePage } from '../pages/student-profile/student-profile';

import { IonicStorageModule } from '@ionic/Storage';
import { FeeDetailsPage } from '../pages/fee-details/fee-details';

@NgModule({
  declarations: [
    MyApp,
    AnnouncementsPage,
    AttendancePage,
    ViewAttendancePage,
    FeesPage,
    FeeDetailsPage,
    FindschoolPage,
    HolidayCalenderPage,
    ImageGalleryPage,
    HomePage,
    ListPage,
    LoginPage,
    LunchMenuPage,
    MarksheetPage,
    RegistrationPage,
    OnlineTeacherPage,
    ProfilePage,
    RegistrationPage,
    ResultsPage,
    SchoolDiaryPage,
    StudentsListPage,
    StudentProfilePage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    HttpModule, 
    HttpClientModule,
    JsonpModule,
    IonicImageViewerModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AttendancePage,
    AnnouncementsPage,
    ViewAttendancePage,
    FeesPage,
    FeeDetailsPage,
    FindschoolPage,
    HolidayCalenderPage,
    ImageGalleryPage,
    HomePage,
    ListPage,
    LoginPage,
    LunchMenuPage,
    MarksheetPage,
    RegistrationPage,
    OnlineTeacherPage,
    ProfilePage,
    RegistrationPage,
    ResultsPage,
    SchoolDiaryPage,
    StudentsListPage,
    StudentProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
