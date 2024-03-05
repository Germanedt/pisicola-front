import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISowing } from 'src/app/models/Sowing.model';
import { SessionDataService } from 'src/app/services/session-data.service';
import { SowingService } from 'src/app/services/sowing.service';
@Component({
  selector: 'app-sowing-card',
  templateUrl: './sowing-card.component.html',
  styleUrls: ['./sowing-card.component.scss'],
})
export class SowingCardComponent {
  @Input() sowing: ISowing = {
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
  @Input() hasActions: boolean = true;
  constructor(
    public router: Router,
    public dataService: SessionDataService,
    public service: SowingService
  ) {
    console.log(this.sowing);
  }
  public gotTo(sowing: ISowing) {
    const state = { sowing };
    this.router.navigate(['/detallesCosecha'], { state });
  }
  public goToEdit(sowing: ISowing) {
    const state = {
      productiveUnit: this.dataService.productiveUnit,
      sowing,
    };
    this.router.navigate(['/modificarCosecha'], { state });
  }
  public handlerConfirmClose(sowingId: number) {
    this.service.closeSowing(sowingId).subscribe((response) => {
      if (response) {
        console.log(response);
      }
    });
  }
  public handlerConfirmDelete(id: number) {
    this.service.deleteSowing(id).subscribe((response) => {
      if (response) {
        console.log(response);
      }
    });
  }
}
