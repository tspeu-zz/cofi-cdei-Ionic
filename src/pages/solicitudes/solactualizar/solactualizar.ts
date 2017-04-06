import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../home/home'; 


@Component({
  selector: 'page-solactualizar',
  templateUrl: 'solactualizar.html'
})
export class SolActualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  fecACtual : string;
  genero  = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActuaSolicitudPage');
  }

  public event = {
    month: '1990-02-19',
    
  }



  todayDate(datetoDay :string) :void{
	let utc = new Date().toJSON().slice(0,10);
		if (datetoDay === undefined ){
	this.fecACtual = utc;
	}
  }


  gotoHome(){
  	console.log(`go home`);
  	this.navCtrl.setRoot(HomePage);
  }
}
