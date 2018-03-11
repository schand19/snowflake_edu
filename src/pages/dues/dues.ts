import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dues',
  templateUrl: 'dues.html',
})
export class DuesPage implements OnInit {

  duesList: { invoiceNumber: string; fee: string; dueDate: string; feeType: string; }[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuesPage');
  }
  
  ngOnInit(){
    this.duesList = [
      {
        invoiceNumber:'564465465',
        fee: '2500' ,
        dueDate: '12/04/2018',
        feeType: 'Tution'
      },
      {
        invoiceNumber:'564465465',
        fee: '500' ,
        dueDate: '12/04/2018',
        feeType: 'Sport'
      },
      {
        invoiceNumber:'564465465',
        fee: '500' ,
        dueDate: '12/04/2018',
        feeType: 'Gim'
      },
      {
        invoiceNumber:'564465465',
        fee: '1500' ,
        dueDate: '12/04/2018',
        feeType: 'Exam'
      },
      {
        invoiceNumber:'564465465',
        fee: '1000' ,
        dueDate: '12/04/2018',
        feeType: 'Dance'
      }
    ]
  }

}
