import {Component, OnInit} from '@angular/core';
import {ToggleSideMenuService} from './services/toggle-side-menu/toggle-side-menu.service';
import {Inject} from '@angular/core';
import {DeviceService} from "./services/device/device.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /**
   * sideMenuIsOpen
   * @type {boolean}
   * @public
   */
  public sideMenuIsOpen = false;

  /**
   * Is mobile?
   * @type {boolean}
   * @public
   */
  public isMobile = false;

  /**
   * Constructor
   * @param {ToggleSideMenuService} _toggleSideMenuService
   * @param {DeviceService} _device
   */
  constructor(@Inject(ToggleSideMenuService) private _toggleSideMenuService: ToggleSideMenuService,
              @Inject(DeviceService) private _device: DeviceService) {
  }

  /**
   * On init
   * @method ngOnInit
   * @public
   */
  public ngOnInit(): void {
    this.isMobile = this._device.isMobile;
    this._toggleSideMenuService.sideMenuIsOpen.subscribe(sideMenuIsOpen => {
      this.sideMenuIsOpen = sideMenuIsOpen;
    });
  }

  /**
   * Toggle side menu
   * @method toggleSideMenu
   * @public
   */
  public toggleSideMenu(): void {
    this._toggleSideMenuService.toggleSideMenu();
  }
}
