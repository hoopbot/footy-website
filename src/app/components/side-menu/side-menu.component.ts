import {Component, OnInit} from '@angular/core';
import {ToggleSideMenuService} from '../../services/toggle-side-menu/toggle-side-menu.service';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  // Side menu open?
  open: boolean;

  constructor(@Inject(ToggleSideMenuService) private _toggleSideMenuService: ToggleSideMenuService) {
    // Subscribe to side menu toggle service
    this._subscribeToToggle();
  }

  /**
   * Subscribe to sideMenuToggle
   * @private
   */
  private _subscribeToToggle() {
    this._toggleSideMenuService.sideMenuIsOpen.subscribe(sideMenuIsOpen => {
      this.open = sideMenuIsOpen;
    });
  }

  /**
   * Toggle side menu
   */
  toggleSideMenu() {
    this._toggleSideMenuService.toggleSideMenu();
  }

  ngOnInit() {
  }

}
