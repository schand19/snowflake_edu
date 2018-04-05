import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Spinner } from '../../utilities/spinner';
import { Storage } from '@ionic/Storage';
import { HomePage } from '../home/home';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [Spinner]
})
export class ProfilePage implements OnInit {
  currentProfile: any;
  profiles = [];
  currentIndex: number = 0;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public spinner: Spinner,
    public storage: Storage) {
      this.profiles = this.navParams.get('profiles');
      this.currentProfile = this.profiles[this.currentIndex];
     }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    /* this.profiles = [
      {
        fullName: "Vivaan Gatadi Vadda",
        imageSrc: './../../assets/imgs/4.jpg',
        rollNumber: '1',
        classTeacher: 'Bhargavi',
        className: 'LKG',
        section: 'A'
      },
      {
        fullName: "Viha Gatadi Vadda",
        imageSrc: './../../assets/imgs/2.jpeg',
        rollNumber: '2',
        classTeacher: 'Devi',
        className: 'UKG',
        section: 'A'
      }
    ]; */
    
    //this.currentProfile = this.profiles[this.currentIndex];
  }

  goToSlide() {
    this.slides.slideTo(this.currentIndex, 500);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', this.currentIndex);
    //let spinner = this.spinner.start({ loaderText: 'Fetching Profile' });
    this.currentProfile = this.profiles[this.currentIndex];
  }

  changeProfile() {
    console.log(this.storage);
    this.storage.set('currentProfile', this.profiles[this.currentIndex]);
    this.navCtrl.push(HomePage);
  }
}
