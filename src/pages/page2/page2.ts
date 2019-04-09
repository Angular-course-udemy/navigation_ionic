import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3Page } from '../index.pages';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  page3: any = Page3Page

  mutantes:any[] = [
    { nombre: 'Magneto',
      poder: 'Controlar metales'
    },
    { nombre: 'Wolverine',
      poder: 'Regeneración acelerada'
    },
    { nombre: 'Profesor X',
      poder: 'Poderes psiquicos'
    },
    { nombre: 'Gambito',
      poder: 'Cargar objetos inanimados con energía'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  goTo3Page(mutante:any) {
    this.navCtrl.push(Page3Page, { "mutante": mutante })
  }

}
