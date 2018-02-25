import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the HolidayCalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holiday-calender',
  templateUrl: 'holiday-calender.html',
})
export class HolidayCalenderPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolidayCalenderPage');
    this.eventSource = this.createRandomEvents();
  }

  createRandomEvents() {
    //1. analyse the holiday events object structure which is printed in console at the bottom of this function.
    //2. Prepare the response json from holiday service in the same format as of the event object format with array of events.
    //3. replace the random events code with the new event object made from the service response.
    var events = [];
    for (var i = 0; i < 20; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
           // var startMinute = Math.floor(Math.random() * 24 * 60);
           // var endMinute = Math.floor(Math.random() * 180) ;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0);
            events.push({
                title: 'Event - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
    console.log("holiday events", events);
    return events;
}
 
  onViewTitleChanged(title) {
    console.log("calender onViewTitleChanged", title);
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    console.log("calender onEventSelected", event);
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    console.log("calender onTimeSelected", ev);
    this.selectedDay = ev.selectedTime;
  }

}
