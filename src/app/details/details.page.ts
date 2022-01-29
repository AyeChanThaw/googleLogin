import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  googleName = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const routerState = this.router.getCurrentNavigation().extras.state;
    console.log("routerState ", routerState);
    this.googleName = routerState.name;
    console.log("googlename ", this.googleName);
  }

}
