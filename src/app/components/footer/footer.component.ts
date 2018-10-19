import {Component, Inject, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device/device.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Is mobile?
   * @type {boolean}
   * @public
   */
  public isMobile = false;

  /**
   * Constructor
   * @param {DeviceService} _device
   */
  constructor(@Inject(DeviceService) private _device: DeviceService) {
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
  public openLink(url: string, blank?: boolean): void {
    if (blank === false) {
      window.open(url, '_self');
    } else {
      window.open(url, '_blank');
    }
  }

}
