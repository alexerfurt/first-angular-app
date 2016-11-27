import { Component, OnInit } from '@angular/core';

import { Spot } from "../spots/spot";
import { SpotService } from "../spots/spot.service";

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'],
  providers: [SpotService]
})
export class GoogleMapsComponent {
  // google maps initial zoom level
  zoom: number = 14;

  title: string = "Dublin";
  // initial center position for the map
  lat: number = 53.3405001;
  lng: number = -6.2362238;

 //  mapClicked($event: MouseEvent) {
 //   this.markers.push({
 //     position.lat: $event.coords.lat,
 //     lng: $event.coords.lng
 //   });
 // }

  // locations info
  markers: Spot[];

constructor (private spotService: SpotService) {}

getSpots(): void {
  this.markers = this.spotService.getSpots();
}

ngOnInit(): void {
  this.getSpots();
}
// just an interface for type safety
// interface markers {
//   position: any;
// 	name: string;
// 	address: string;
// 	yelpID: string;
// 	draggable: boolean;
//
}
