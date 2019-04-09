import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../index.pages'

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  
  goToPage2:any = Page2Page

  constructor(public navCtrl: NavController) {
  }

  navigateTo() {
    this.navCtrl.push(Page2Page)
  }

}
