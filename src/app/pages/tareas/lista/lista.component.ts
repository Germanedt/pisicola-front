import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import {
  IListTaskRequest,
  IListTaskResponse,
  ITask,
} from 'src/app/models/Task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaTareasComponent implements OnInit {
  listOfData: ITask[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  constructor(public router: Router, public service: TaskService) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  public goToEdit(task: ITask) {
    const state = { task, productiveUnit: this.productiveUnit };
    this.router.navigate(['/modificarTarea'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.service.deleteTask(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public loadData() {
    const params: IListTaskRequest = {
      page: 1,
      perPage: 10,
    };
    this.service
      .listTasks(params, this.productiveUnit.id)
      .subscribe((response: IListTaskResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
