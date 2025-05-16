import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerolineaListComponent } from './AerolineasList/aerolineasListComponent';
import { AerolineaDetailComponent } from './AerolineasDetail/aerolineaDetalComponent';
import { AerolineaVuelosComponent } from './AerolineasVuelos/aerolineasVuelos.component';

const routes: Routes = [
  { path: '', component: AerolineaListComponent },
  { path: 'airline/:id', component: AerolineaDetailComponent },
  { path: 'airline/:id/flights', component: AerolineaVuelosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
