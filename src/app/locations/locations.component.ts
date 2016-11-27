import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Location } from './location';
import { LocationService } from './location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [LocationService]
})
export class LocationsComponent implements OnInit {
  locations: Location[];
  // locations: FirebaseListObservable<any[]>;
  // constructor(af: AngularFire) {
  //   this.items = af.database.list('locations');
  // }

  constructor(
    private locationService: LocationService,
    private router: Router) {}

  getLocations(): void {
    this.locations = this.locationService.getLocations();
  }

  ngOnInit(): void {
    this.getLocations();
  }

  onNavigate() {
    this.router.navigate(['city']);
  }


}
