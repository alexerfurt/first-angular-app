import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { GoogleMapsComponent } from "../google-maps/google-maps.component";

import { Spot } from "./spot";
import { SpotService } from "./spot.service";

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css'],
  providers: [SpotService]
})

export class SpotsComponent implements OnInit {
  spots: Spot[];

  constructor(
    private spotService: SpotService,
    private router: Router) {}

  getSpots(): void {
    this.spots = this.spotService.getSpots();
  }

  ngOnInit(): void {
    this.getSpots();
  }

  onNavigate(): void {
    this.router.navigate(['']);
  }

}
