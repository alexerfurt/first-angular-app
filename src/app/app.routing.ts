import { RouterModule, Routes, Router } from "@angular/router";

import { LocationsComponent } from "./locations/locations.component";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { SpotsComponent } from "./spots/spots.component";

const APP_ROUTES: Routes = [
  { path: '', component: LocationsComponent},
  { path: 'city', component: SpotsComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
