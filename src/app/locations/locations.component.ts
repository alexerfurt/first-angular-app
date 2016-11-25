import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  // locations: FirebaseListObservable<any[]>;

  locations: Object[] = [
    {
      name: "Berlin, Germany",
      image: "img/berlin.jpg",
      description: "Collection of your favorite places in Berlin"
    },
    {
      name: "Dublin, Ireland",
      image: "img/dublin.jpg",
      description: "Collection of your favorite places in Dublin"
    },
    {
      name: "Lisbon, Portugal",
      image: "img/lisbon.jpg",
      description: "Collection of your favorite places in Lisbon"
    },
    {
      name: "London, UK",
      image: "img/london.jpg",
      description: "Collection of your favorite places in London"
    }

  ];

  // constructor(af: AngularFire) {
  //   this.items = af.database.list('locations');
  // }

  constructor(private router: Router) {}

    ngOnInit() {
    }

    onNavigate() {
      this.router.navigate(['city']);
    }


}
