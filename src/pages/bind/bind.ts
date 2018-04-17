import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    console.log('1. >> BindPage ionViewDidLoad '+this.navParams.get("name"));
  }

  ionViewWillEnter(){
    console.log("homepage ionViewWillEnter() 호출");
  }

  ionViewWillUnload(){
    console.log("homepage ionViewWillUnload() 호출");
  }


  goBack(){
    this.navCtrl.pop();
  }
}
