import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FeesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fees',
  templateUrl: 'fees.html'
})
export class FeesPage implements OnInit{

  duesList: { invoiceNumber: string; fee: string; dueDate: string; feeType: string; }[];
  duesRoot = 'DuesPage'
  paymentsHistoryRoot = 'PaymentsHistoryPage'
  feeTypesRoot = 'FeeTypesPage'


  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
