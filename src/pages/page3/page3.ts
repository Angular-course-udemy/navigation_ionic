import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  mutante:any = {}
  
  constructor(public navParams: NavParams, private navCtrl: NavController) {
    this.mutante = this.navParams.get("mutante")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

  goBack(){ this.navCtrl.pop() }
  goToRoot(){ this.navCtrl.popToRoot() }

}
