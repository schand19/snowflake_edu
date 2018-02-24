import { BrowserModule } from '@angular/platform-browser';
import {IonicImageViewerModule} from 'ionic-img-viewer';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
import { AttendancePage } from '../pages/attendance/attendance';
import { HolidayCalenderPage } from '../pages/holiday-calender/holiday-calender';
import { OnlineTeacherPage } from '../pages/online-teacher/online-teacher';
//import { MarksheetPage } from '../pages/marksheet/marksheet';

import {IonicStorageModule} from '@ionic/Storage';

@NgModule({
  declarations: [
    MyApp,
    AnnouncementsPage,
    AttendancePage,
    FindschoolPage,
    HolidayCalenderPage,
    ImageGalleryPage,
    HomePage,
    ListPage,
    LoginPage,
    LunchMenuPage,
    //MarksheetPage,
    RegistrationPage,
    OnlineTeacherPage,
    ProfilePage,
    RegistrationPage,
    ResultsPage,
    SchoolDiaryPage,
  ],
  imports: [
    BrowserModule,
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
    AnnouncementsPage,
    AttendancePage,
    FindschoolPage,
    HolidayCalenderPage,
    ImageGalleryPage,
    HomePage,
    ListPage,
    LoginPage,
    LunchMenuPage,
    //MarksheetPage,
    RegistrationPage,
    OnlineTeacherPage,
    ProfilePage,
    RegistrationPage,
    ResultsPage,
    SchoolDiaryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
