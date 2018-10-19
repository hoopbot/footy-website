import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from '../../services/device/device.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  /**
   * Is mobile?
   * @type {boolean}
   * @public
   */
  public isMobile = false;

  /**
   * Device type (iOS or Android)
   * @type {string}
   * @public
   */
  public device = 'unkown';

  /**
   * @property leaderboard
   * @public
   */
  public leaderboard: Observable<any[]>;

  /**
   * @constructor
   * @param {DeviceService} _device
   * @param {AngularFirestore} db
   */
  constructor(@Inject(DeviceService) private _device: DeviceService, db: AngularFirestore) {
    this.leaderboard = db.collection('global-leaderboard', ref => ref.orderBy('rank')).valueChanges();
  }

  ngOnInit() {
    this.isMobile = this._device.isMobile;
    this.device = this._device.os;
    document.getElementById('footer').style.position = 'fixed';
    document.getElementsByTagName('body')[0].style.backgroundColor = '#474a51';
  }

  /**
   * Open Google Play store link
   * @method openAndroid
   * @public
   */
  public openAndroid() {
    window.open('https://play.google.com/store/apps/details?id=neverland.hoopbot');
  }

  /**
   * Open iOS App store link
   * @method openiOS
   * @public
   */
  public openiOS() {
    window.open('https://itunes.apple.com/us/app/hoopbot/id1313728649');
  }

  ngOnDestroy() {
    document.getElementById('footer').style.position = 'relative';
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  }

}
