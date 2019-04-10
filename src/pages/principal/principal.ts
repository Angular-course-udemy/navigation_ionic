import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Page2Page } from '../index.pages'

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  
  goToPage2:any = Page2Page

  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController) {
  }

  navigateTo() {
    this.navCtrl.push(Page2Page)
  }
  showMenu() {
    this.menuCtrl.toggle()
  }

}
