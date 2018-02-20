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
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    FindschoolPage,
    RegistrationPage,
    SchoolDiaryPage,
    ImageGalleryPage,
    ProfilePage,
    SchoolDiaryPage,
    LunchMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule, 
    HttpClientModule,
    JsonpModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    FindschoolPage,
    RegistrationPage,
    SchoolDiaryPage,
    ImageGalleryPage,
    ProfilePage,
    SchoolDiaryPage,
    LunchMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
