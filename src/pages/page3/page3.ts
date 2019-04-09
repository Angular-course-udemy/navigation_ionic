import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  mutante:any = {}
  
  constructor(public navParams: NavParams) {
    console.log(navParams)
    this.mutante = this.navParams.get("mutante")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
