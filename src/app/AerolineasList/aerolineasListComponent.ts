import { OnInit } from "@angular/core";
import { AerolineaService } from "../aerolinea.service";

export class AerolineaListComponent implements OnInit {
  airlines: any[] = [];

  constructor(private airlineService: AerolineaService) {}

  ngOnInit(): void {
    this.airlineService.getAllAirlines().subscribe(data => {
      this.airlines = data;
    });
  }
}
