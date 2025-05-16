import { Component, OnInit } from "@angular/core";
import { AerolineaService } from "../aerolinea.service";

@Component({
  selector: 'app-aerolineas-list',
  templateUrl: './aerolineas-list.component.html',
  styleUrls: ['./aerolineas-list.component.css']
})
export class AerolineasListComponent implements OnInit {
  airlines: any[] = [];

  constructor(private airlineService: AerolineaService) {}

  ngOnInit(): void {
    this.airlineService.getAllAirlines().subscribe(data => {
      this.airlines = data;
    });
  }
}

