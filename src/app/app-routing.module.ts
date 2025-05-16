import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerolineasListComponent } from './AerolineasList/aerolineas-list.component';
import { AerolineaDetailComponent } from './AerolineasDetail/aerolinea-detail.component';
import { AerolineaVuelosComponent } from './AerolineasVuelos/aerolineas-vuelos.component';


const routes: Routes = [
  { path: '', component: AerolineasListComponent },
  { path: 'airline/:id', component: AerolineaDetailComponent },
  { path: 'airline/:id/flights', component: AerolineaVuelosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
