import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarksheetPage } from '../marksheet/marksheet';
//import { MarksheetPage } from '../marksheet/marksheet';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit{

  examsList: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.examsList = ['Pre-Final', 'Quaterly', 'Hal-Yearly', 'Final'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  getMarksForTheExam(exam){
    this.navCtrl.push(MarksheetPage, {examName:exam});
  }

}
