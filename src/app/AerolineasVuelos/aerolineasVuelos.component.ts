import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-airline-flights',
  templateUrl: './airline-flights.component.html',
  styleUrls: ['./airline-flights.component.css']
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
