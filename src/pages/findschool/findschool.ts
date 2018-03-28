import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Services } from '../../services/services';
import { Spinner } from '../../utilities/spinner';
import {Storage} from '@ionic/Storage';
/**
 * Generated class for the FindschoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-findschool',
  templateUrl: 'findschool.html',
  providers: [Services, Spinner]
})
export class FindschoolPage implements OnInit {
  schools: string[];
  selectedSchool: string;
  selectedSchoolId: string;
  selectedSchoolDB: string;
  isDisabled: boolean = true;
  registeredSchools: any;
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams,
     public spinner: Spinner, public storage: Storage, private _services: Services) {
  }

  ngOnInit() {
    this.storage.clear();
    
    let spinner = this.spinner.start({ loaderText: 'Fetching Schools' });
    this._services.getRegisteredSchools().subscribe(
      registeredSchools => {
        console.log(registeredSchools);
        this.registeredSchools = registeredSchools.data;
      },
      err => {
        alert('Unable to fetch schools, try again after sometime');
      },
      () => {
        spinner.dismiss();
      });
      /* this.registeredSchools = [
        {school_name : 'Hyderabad Public School', school_address : 'Lingampally', school_id : '1', school_db : '1'},
        {school_name : 'Delhi Public School', school_address : 'Lanco Hills', school_id : '2', school_db : '2'}
      ] */
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FindschoolPage');
  // }

  getMeToLogin() {
    this.navCtrl.push(LoginPage, { selectedSchool: this.selectedSchool, selectedSchoolId: this.selectedSchoolId/* , selectedSchoolDB: this.selectedSchoolDB */ });
  }
  selectOption(value) {
    this.selectedSchool = value.vSchoolName + ', ' + value.address;
    this.selectedSchoolId = value['iSchoolId'];
    // this.selectedSchoolDB = value['school_db'];
    this.isDisabled = false;
    this.schools = [];
  }
  generateSchools() {
    this.schools = this.registeredSchools;//.map(obj => { return obj.school_name + ', ' + obj.school_address; });
  }
  getRegisteredSchools(ev: any) {
    this.generateSchools();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.schools = this.registeredSchools.filter((school) => {
        if (school['vSchoolName'].toLowerCase() + ', ' + school['address'].toLowerCase() != val.toLowerCase()) {
          this.isDisabled = true;
        }
        return ((school['vSchoolName'].toLowerCase() + ', ' + school['address'].toLowerCase()).indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
