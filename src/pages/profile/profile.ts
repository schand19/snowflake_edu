import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

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
})
export class ProfilePage {
  currentIndex: number;
  @ViewChild(Slides) slides: Slides;

  constructor() {
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
  }

}
