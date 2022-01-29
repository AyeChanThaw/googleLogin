import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfo = null;

  constructor(private router: Router) {}

  ionViewDidEnter() {
    GoogleAuth.init();
  }

  async googleSignup() {
    const user = await GoogleAuth.signIn();
    console.log("user ", user);
    this.userInfo = user.givenName + " " + user.familyName;
    // Navigate with state
    const navigationExtras: NavigationExtras = {
      state: {
        name: this.userInfo
      },
    };
    this.router.navigateByUrl('/details', navigationExtras);
  }

}
