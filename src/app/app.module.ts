/**
 * Core Angular modules
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

/**
 * Components
 */
import {SideMenuComponent} from './components/side-menu/side-menu.component';

/**
 * Pages
 */
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {HowToPlayComponent} from './pages/how-to-play/how-to-play.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {DownloadComponent} from './pages/download/download.component';

/**
 * Side menu service
 */
import {ToggleSideMenuService} from './services/toggle-side-menu/toggle-side-menu.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {DeviceService} from "./services/device/device.service";

/**
 * App routes
 * @type {[{path: string; component: WelcomeComponent} , {path: string; component: HowToPlayComponent} , {path: string; component: PrivacyPolicyComponent} , {path: string; component: AboutUsComponent}]}
 */
const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'how-to-play', component: HowToPlayComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'download', component: DownloadComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PrivacyPolicyComponent,
    SideMenuComponent,
    HowToPlayComponent,
    AboutUsComponent,
    DownloadComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ToggleSideMenuService,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
