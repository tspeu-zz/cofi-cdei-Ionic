import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-solborrar',
  templateUrl: 'solborrar.html'
})
export class SolBorrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrarSOLPage');
  }

   gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }

}
