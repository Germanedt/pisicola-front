import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import {
  IListTaskLogRequest,
  IListTaskLogResponse,
  ITaskLog,
} from 'src/app/models/TaskLog.model';
import { TaskLogService } from 'src/app/services/taskLog.service';

@Component({
  selector: 'app-lista-rtareas',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaRegistroTareasComponent implements OnInit {
  listOfData: ITaskLog[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  constructor(public router: Router, public service: TaskLogService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  public goToEdit(taskLog: ITaskLog) {
    const state = { taskLog, productiveUnit: this.productiveUnit };
    this.router.navigate(['/modificarRegistroTarea'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.service.deleteTaskLog(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public loadData() {
    const params: IListTaskLogRequest = {
      page: 1,
      perPage: 10,
    };
    this.service
      .listTaskLogs(params, this.productiveUnit.id)
      .subscribe((response: IListTaskLogResponse) => {
        this.listOfData = response.data;
      });
  }
  public getDate(date: string) {
    return moment(date).format('YYYY-MM-DD hh:mm a');
  }
  ngOnInit(): void {
    this.loadData();
  }
}
