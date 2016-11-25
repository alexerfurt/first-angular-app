import { RouterModule, Routes, Router } from "@angular/router";

import { LocationsComponent } from "./locations/locations.component";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";

const APP_ROUTES: Routes = [
  { path: '', component: LocationsComponent},
  { path: 'city', component: GoogleMapsComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
