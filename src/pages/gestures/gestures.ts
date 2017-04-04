import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/*
  Generated class for the Gestures page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html'
})
export class GesturesPage {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }

  doLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

}
