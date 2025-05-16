import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolineas-vuelos',
  templateUrl: './aerolineas-vuelos.component.html',
  styleUrls: ['./aerolineas-vuelos.component.css']
})
export class AerolineaVuelosComponent implements OnInit {

  airline: any;

  constructor(
    private route: ActivatedRoute,
    private aerolineaService: AerolineaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.aerolineaService.getAirlineById(id).subscribe(data => {
        this.airline = data;
      });
    }
  }
}
