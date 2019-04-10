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
    let data = {
      name: 'Pingu',
      age: 15,
      coords: {
        lat: 10,
        lng: -10
      }
    }

    this.viewCtrl.dismiss(data)
  }
  
  closeWithoutParams() {
    this.viewCtrl.dismiss()
  }

}
