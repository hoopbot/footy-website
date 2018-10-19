import {Component, Inject, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device/device.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Is mobile?
   * @type {boolean}
   * @public
   */
  public isMobile = false;

  /**
   * @property leaderboard
   * @public
   */
  public leaderboard: Observable<any[]>;

  /**
   * Constructor
   * @param {DeviceService} _device
   */
  constructor(@Inject(DeviceService) private _device: DeviceService, db: AngularFirestore) {
    this.leaderboard = db.collection('global-leaderboard').valueChanges();
  }

  ngOnInit() {
    this.isMobile = this._device.isMobile;
  }

  /**
   * Open link
   * @param {string} url
   * @method openLink
   * @public
   */
  public openLink(url: string): void {
    window.open(url, '_blank');
  }

}
