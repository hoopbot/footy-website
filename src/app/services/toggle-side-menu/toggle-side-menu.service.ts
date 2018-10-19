import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ToggleSideMenuService {

  /**
   * Side menu is open
   * @type {BehaviorSubject<boolean>}
   * @private
   */
  private _sideMenuIsOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * Toggle side menu
   * @method toggleSideMenu
   * @public
   */
  public toggleSideMenu(): void {
    if (this._sideMenuIsOpen.getValue() === true) {
      this._sideMenuIsOpen.next(false);
    } else {
      this._sideMenuIsOpen.next(true);
    }
  }

  /**
   * Getter for sideMenuIsOpen boolean
   * @returns {BehaviorSubject<boolean>}
   * @public
   */
  public get sideMenuIsOpen(): BehaviorSubject<boolean> {
    return this._sideMenuIsOpen;
  }

}
