import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {
  IEmployees,
  IListEmployeesRequest,
} from 'src/app/models/Employee.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { IListTaskRequest, ITask } from 'src/app/models/Task.model';
import { IModifyTaskLogRequest, ITaskLog } from 'src/app/models/TaskLog.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TaskService } from 'src/app/services/task.service';
import { TaskLogService } from 'src/app/services/taskLog.service';

@Component({
  selector: 'app-modificar-tproducto',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarRegistroTareaComponent implements OnInit {
  public datetimeFinished: any;
  public datetimeStarted: any;
  form: FormGroup = this.fb.group({
    task_id: [0, [Validators.required]],
    employee_id: [0, [Validators.required]],
    started_at: ['', [Validators.required]],
    finished_at: ['', [Validators.required]],
  });
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  taskLog: ITaskLog = {
    id: 0,
    task_id: 0,
    employee_id: 0,
    productive_unit_id: 0,
    started_at: '',
    finished_at: '',
    duration: 0,
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };
  tasks: ITask[] = [];
  employees: IEmployees[] = [];
  submitForm(): void {
    if (this.form.valid) {
      const payload: IModifyTaskLogRequest = {
        id: this.taskLog.id,
        task_id: this.form.get('task_id')?.value,
        employee_id: this.form.get('employee_id')?.value,
        started_at: moment(this.form.get('started_at')?.value).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        finished_at: moment(this.form.get('finished_at')?.value).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
      };
      this.service.modifyTaskLog(payload).subscribe((response) => {
        if (response) {
          const state = { productiveUnit: this.productiveUnit };
          this.router.navigate(['listaRegistroTareas'], { state });
        }
      });
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private service: TaskLogService,
    private taskService: TaskService,
    private employeeService: EmployeesService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
      this.taskLog = data['taskLog'];
      this.form.setValue({
        task_id: this.taskLog.task_id,
        employee_id: this.taskLog.employee_id,
        started_at: moment(this.taskLog.started_at).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        finished_at: moment(this.taskLog.finished_at).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
      });
    }
  }
  getTaskList() {
    const params: IListTaskRequest = {
      page: 0,
      perPage: 0,
    };
    this.taskService
      .listTasks(params, this.productiveUnit.id)
      .subscribe((response) => {
        this.tasks = response.data;
      });
  }
  getEmployeesList() {
    const params: IListEmployeesRequest = {
      page: 0,
      perPage: 0,
    };
    this.employeeService
      .listEmployess(params, this.productiveUnit.id)
      .subscribe((response) => {
        this.employees = response.data;
      });
  }
  ngOnInit(): void {
    this.getTaskList();
    this.getEmployeesList();
  }

  /**
   * @method onChangeDateTimeStarted
   */
  onChangeDateTimeStarted() {
    this.form.patchValue({
      started_at: moment(this.datetimeFinished).format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  /**
   * @method onChangeDateTimeFinished
   */
  onChangeDateTimeFinished() {
    this.form.patchValue({
      finished_at: moment(this.datetimeFinished).format('YYYY-MM-DD HH:mm:ss'),
    });
  }
}
