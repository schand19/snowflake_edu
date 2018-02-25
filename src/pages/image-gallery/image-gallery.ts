import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the ImageGalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-gallery',
  templateUrl: 'image-gallery.html',
})
export class ImageGalleryPage {
  images:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public imageViewerCtrl: ImageViewerController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageGalleryPage');
    this.images= ['1.jpeg', '2.jpeg', '3.jpg', '4.jpg'];
  }

  presentImage(myImage) {
    const imageViewer = this.imageViewerCtrl.create(myImage);
    imageViewer.present(); 
  }

}
