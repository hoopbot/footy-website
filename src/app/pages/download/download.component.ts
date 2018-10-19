import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeviceService} from "../../services/device/device.service";

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  /**
   * Constructor
   * @param {Router} _router
   * @param {DeviceService} _device
   */
  constructor(@Inject(Router) private _router: Router,
              @Inject(DeviceService) private _device: DeviceService) {
  }

  /**
   * On init
   * @method ngOnInit
   * @public
   */
  public ngOnInit(): void {
    const agent = this._device.os;
    if (agent === 'ios') {
      window.location.href = 'https://itunes.apple.com/us/app/hoopbot/id1313728649';
    } else if (agent === 'android') {
      window.location.href = 'https://play.google.com/store/apps/details?id=neverland.hoopbot&hl=en';
    } else {
      this._router.navigate(['/']);
    }
  }

}
