import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarksheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marksheet',
  templateUrl: 'marksheet.html',
})
export class MarksheetPage implements OnInit{

  marksheet: {};
  exam: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exam = this.navParams.get('examName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarksheetPage');
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.marksheet = [
      { subject :'Telugu', secured:'29', total:'50'},
      { subject :'Hindi', secured:'32', total:'50'},
      { subject :'English', secured:'34', total:'50'},
      { subject :'Maths', secured:'47', total:'50'},
      { subject :'Science', secured:'48', total:'50'},
      { subject :'Social', secured:'46', total:'50'}
    ];
  }

}
