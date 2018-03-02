import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FindSchoolService } from '../../services/findSchool.service';
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
  providers: [FindSchoolService, Spinner]
})
export class FindschoolPage {
  schools: string[];
  selectedSchool: string;
  selectedSchoolId: string;
  selectedSchoolDB: string;
  isDisabled: boolean = true;
  registeredSchools: any;
  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams,
     public spinner: Spinner, public storage: Storage) {

  }

  ngOnInit() {
    //let spinner = this.spinner.start({ loaderText: 'Fetching Schools' });
    /* this._fss.getRegisteredSchools().subscribe(
      registeredSchools => {
        this.registeredSchools = registeredSchools.data;
      },
      err => {
        alert('Unable to fetch schools, try again after sometime');
      },
      () => {
        spinner.dismiss();
      }); */
      this.storage.clear();
      this.registeredSchools = [
        {school_name : 'Hyderabad Public School', school_address : 'Lingampally', school_id : '1', school_db : '1'},
        {school_name : 'Delhi Public School', school_address : 'Lanco Hills', school_id : '2', school_db : '2'}
      ]
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FindschoolPage');
  // }

  getMeToLogin() {
    this.navCtrl.push(LoginPage, { selectedSchool: this.selectedSchool, selectedSchoolId: this.selectedSchoolId, selectedSchoolDB: this.selectedSchoolDB });
  }
  selectOption(value) {
    this.selectedSchool = value.school_name + ', ' + value.school_address;
    this.selectedSchoolId = value['school_id'];
    this.selectedSchoolDB = value['school_db'];
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
        if (school['school_name'].toLowerCase() + ', ' + school['school_address'].toLowerCase() != val.toLowerCase()) {
          this.isDisabled = true;
        }
        return ((school['school_name'].toLowerCase() + ', ' + school['school_address'].toLowerCase()).indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
