import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import { AerolineasListComponent } from './AerolineasList/aerolineas-list.component';
import { AerolineaDetailComponent } from './AerolineasDetail/aerolinea-detail.component';
import { AerolineaVuelosComponent } from './AerolineasVuelos/aerolineas-vuelos.component';

@NgModule({
  declarations: [
    AppComponent,
    AerolineasListComponent,
    AerolineaDetailComponent,
    AerolineaVuelosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

