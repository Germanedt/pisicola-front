import { Component, OnInit } from '@angular/core';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import {
  ISowinStatRecord,
  ISowing,
  ISowingHistoryRequest,
} from 'src/app/models/Sowing.model';
import { Router } from '@angular/router';
import { SowingService } from 'src/app/services/sowing.service';
import * as moment from 'moment';

@Component({
  selector: 'app-historial-cosechas',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialCosechaComponent implements OnInit {
  public datetimeStarted: any;
  public datetimeFinished: any;
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
  // endDate: any = new Date();
  endDate: any = moment(new Date()).format('YYYY-MM-DD');
  // startDate: any = new Date(new Date().setDate(this.endDate.getDate() - 7));
  startDate: any = moment(this.endDate, 'YYYY-MM-DD')
    .subtract(7, 'days')
    .format('YYYY-MM-DD');
  showError = false;
  constructor(public router: Router, public service: SowingService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.sowing = data['sowing'];
      this.keys = data['keys'];
    }
  }
  ngOnInit(): void {}

  public onChangeStartDate() {
    this.showError = false;
  }
  public onChangeEndDate() {
    this.showError = false;
  }
  public handleClickSearch() {
    if (
      this.startDate &&
      this.endDate &&
      moment(this.startDate).isBefore(moment(this.endDate))
    ) {
      this.loadData();
    } else {
      this.showError = true;
    }
  }
  public hasData() {
    return this.listOfData.length > 0;
  }
  public loadData() {
    this.listOfData = [];
    const payload: ISowingHistoryRequest = {
      sowing_id: this.sowing.id,
      keys: this.keys,
      start_date:
        moment(this.startDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + ' 00:00:00',
      end_date:
        moment(this.endDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + ' 23:59:59',
    };
    this.service.loadSowingHistoryStats(payload).subscribe((response) => {
      this.listOfData = Object.keys(response.stats).map((item: string) => {
        return {
          key: item,
          stats: response.stats[item],
        };
      });
    });
  }

  ionViewWillEnter(): void {
    this.loadData();
  }

  /**
   * @method onChangeDateTimeStarted
   */
  onChangeDateTimeStarted() {
    this.startDate = moment(this.datetimeStarted).format('YYYY-MM-DD');
  }

  /**
   * @method onChangeDateTimeFinished
   */
  onChangeDateTimeFinished() {
    this.endDate = moment(this.datetimeFinished).format('YYYY-MM-DD');
  }
}
