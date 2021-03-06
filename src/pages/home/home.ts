import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ComponentPage} from "../component/component";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
    {"id":1,"name":"Component"},
    {"id":2,"name":"두번째 Item"},
    {"id":3,"name":"세번째 Item"},
    ];

  disabledSwitch = false;
  userName :any;

  constructor(public navCtrl: NavController) {
    //this.userName = "아이오닉테스트"
  }


  //event handler 메서드
  itemSelected(item){
    if(item.id === 1){
      this.navCtrl.push("ComponentPage");
    }
  }

  myButton(event){
    if(typeof this.userName !== "undefined"){
      console.log(event.target.textContent+ " " + event.clientX + ","+event.clientY);
      this.navCtrl.push("BindPage", {name:this.userName});
    }else{
      alert("insert userName.");
    }
  }

  ionViewDidLoad(){
    console.log("homepage ionViewDidLoad() 호출");
  }

  ionViewWillEnter(){
    console.log("homepage ionViewWillEnter() 호출");
  }

  ionViewWillUnload(){
    console.log("homepage ionViewWillUnload() 호출");
  }
}


