import { Component, OnInit } from '@angular/core';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import {
  ISowinStatRecord,
  ISowing,
  ISowingHistoryRequest,
  ISowingStat,
} from 'src/app/models/Sowing.model';
import { Router } from '@angular/router';
import { SowingService } from 'src/app/services/sowing.service';

@Component({
  selector: 'app-historial-cosechas',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.less'],
})
export class HistorialCosechaComponent implements OnInit {
  public listOfData: ISowinStatRecord[] = [];
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
  keys: string[] = [];
  constructor(public router: Router, public service: SowingService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.sowing = data['sowing'];
      this.keys = data['keys'];
    }
  }
  ngOnInit(): void {
    this.loadData();
  }
  public loadData() {
    this.listOfData = [];
    const payload: ISowingHistoryRequest = {
      sowing_id: this.sowing.id,
      keys: this.keys,
      start_date: '2023-06-07 00:00:00',
      end_date: '2023-06-15 00:00:00',
    };
    this.service.loadSowingHistoryStats(payload).subscribe((response) => {
      this.listOfData = Object.keys(response.stats).map((item: string) => {
        return {
          key: item,
          stats: response.stats[item].reverse(),
        };
      });
    });
  }
}
