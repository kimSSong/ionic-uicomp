import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  private images = [
    {title:"assets/imgs/1.jpg"},
    {title:"assets/imgs/2.jpg"},
    {title:"assets/imgs/3.jpg"},
    {title:"assets/imgs/4.jpg"},
    {title:"assets/imgs/5.jpg"},
  ]

  private cardImages = [
    {src:"assets/imgs/1.jpg",title:"스타워즈",subtitle:"41 Listings"},
    {src:"assets/imgs/2.jpg",title:"제국",subtitle:"41 Listings"},
    {src:"assets/imgs/3.jpg",title:"졸려",subtitle:"41 Listings"},
    {src:"assets/imgs/4.jpg",title:"피곤",subtitle:"41 Listings"},
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

}
