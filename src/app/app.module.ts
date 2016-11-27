import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdRippleModule } from '@angular2-material/core';
import { PortalModule } from '@angular2-material/core';
import { OverlayModule } from '@angular2-material/core';
import { RtlModule } from '@angular2-material/core';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import  { routing } from './app.routing';
import { SpotsComponent } from './spots/spots.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAX8O6qcpVsEKtY-90UtC-FqK9AesR5yCo',
  authDomain: 'faved-app.firebaseapp.com',
  databaseURL: 'https://faved-app.firebaseio.com',
  storageBucket: 'faved-app.appspot.com',
  messagingSenderId: "20177870286"
};

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    GoogleMapsComponent,
    SpotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdRippleModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMBoVkH9JAjs7P0LkVZKAvHTaQt_rcwKk'
    })
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
