import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  principalActivate() {
    this.navCtrl.parent.select(1)
  }

  showModal(){
    let modal = this.modalCtrl.create(ModalPage, { name: 'Pingu'})
    modal.present()
    modal.onDidDismiss(params => {
      console.log('Data modal')
      console.log(params)
    })
  }

}
