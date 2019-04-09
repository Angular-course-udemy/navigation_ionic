import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  name: string = ''

  constructor(
    public viewCtrl: ViewController, 
    public navParams: NavParams
  ) {
    this.name = this.navParams.get(name)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeWithParams() {
    this.viewCtrl.dismiss()
  }

  closeWithoutParams() {

  }

}
