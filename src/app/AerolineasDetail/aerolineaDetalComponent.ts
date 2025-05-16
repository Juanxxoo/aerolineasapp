import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AerolineaService } from "../aerolinea.service";

export class AerolineaDetailComponent implements OnInit {
  airline: any;

  constructor(
    private route: ActivatedRoute,
    private airlineService: AerolineaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.airlineService.getAirlineById(id).subscribe(data => {
      this.airline = data;
    });
  }
}
