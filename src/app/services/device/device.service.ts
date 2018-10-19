import {Injectable} from '@angular/core';

@Injectable()
export class DeviceService {

  /**
   * Is mobile?
   * @type {boolean}
   * @private
   */
  private _isMobile = false;

  /**
   * Operating system
   * @type {string}
   * @private
   */
  private _os = 'unkown';

  /**
   * Constructor - determine device (user agent) and isMobile
   */
  constructor() {
    const _window: any = window;
    const userAgent = navigator.userAgent || navigator.vendor || _window.opera;
    if (/windows phone/i.test(userAgent)) {
      this._os = 'windows';
      this._isMobile = true;
    }
    if (/android/i.test(userAgent)) {
      this._os = 'android';
      this._isMobile = true;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !_window.MSStream) {
      this._os = 'ios';
      this._isMobile = true;
    }
  }

  /**
   * Getter for isMobile variable
   * @returns {boolean}
   * @public
   */
  public get isMobile(): boolean {
    return this._isMobile;
  }

  /**
   * Getter for operating system
   * @returns {string}
   * @public
   */
  public get os(): string {
    return this._os;
  }

}
