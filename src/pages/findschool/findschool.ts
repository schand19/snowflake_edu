import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class FindschoolPage {
  schools : string[];
  selectedSchool : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.generateSchools();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindschoolPage');
  }

  selectOption(value){
    this.selectedSchool = value;
    this.schools = [];
  }
  generateSchools (){
    this.schools = [
      'Vivekananda Hyderabad 500018',
      'Kakatiya Hyderabad 500032'
    ];
  }
  getRegisteredSchools(ev:any) {
    this.generateSchools();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.schools = this.schools.filter((school) => {
        if(school.toLowerCase().indexOf(val.toLowerCase()) > -1){
          console.log(school);
        }
        return (school.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
