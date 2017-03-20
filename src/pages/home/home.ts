import { Component, ViewChild } from '@angular/core';

import { NavController, Nav } from 'ionic-angular';
import { ClientesPage, SolicitudesPage } from '../index'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController) {
    
  }

  gotoClientes(){
  	console.log('pagina 1');
  	this.navCtrl.push(ClientesPage);
  	//this.nav.setRoot(ClientesPage);

  }

 gotoSoli(){
 	console.log('pagina 2');
 	///this.navCtrl.push(SolicitudesPage);
 }
}
