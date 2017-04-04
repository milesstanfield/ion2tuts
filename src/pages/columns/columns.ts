import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Columns page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-columns',
  templateUrl: 'columns.html'
})
export class ColumnsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  myIcon: string = "home";

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColumnsPage');
  }

}
