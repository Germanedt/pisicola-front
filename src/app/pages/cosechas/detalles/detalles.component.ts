import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISowing, ISowingStat } from 'src/app/models/Sowing.model';
import { SowingService } from 'src/app/services/sowing.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.less'],
})
export class DetallesCosechaComponent implements OnInit {
  public listOfData: ISowingStat[] = [];
  public lastUpdate: Date = new Date();
  sowing: ISowing = {
    id: 0,
    user_id_created: 0,
    pond_id: 0,
    fish_step_id: 0,
    total_fish: 0,
    closed_at: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };
  constructor(public router: Router, public service: SowingService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.sowing = data['sowing'];
    }
  }
  public loadData() {
    this.listOfData = [];
    this.service.loadSowingStats(this.sowing.id).subscribe((response) => {
      this.listOfData = response;
      this.lastUpdate = new Date();
    });
  }
  public gotToHistory() {
    const keys: string[] = this.listOfData.map((item) => item.key);
    const state = { sowing: this.sowing, keys };
    this.router.navigate(['/historialCosecha'], { state });
  }

  public goToFoods() {
    const state = { sowing: this.sowing };
    this.router.navigate(['/listaAlimentos'], {state})
  }

  public goToMedicines() {
    const state = { sowing: this.sowing };
    this.router.navigate(['/listaMedicamentos'], {state})
  }
  ngOnInit(): void {
    this.loadData();
  }
}
