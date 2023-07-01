import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ICreateTaskLogRequest } from 'src/app/models/TaskLog.model';
import { TaskLogService } from 'src/app/services/taskLog.service';

@Component({
  selector: 'app-agregar-rtarea',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarRegistroTareaComponent implements OnInit {
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
    deleted_at: ''
  }
  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateTaskLogRequest = {
        task_id: this.form.get('task_id')?.value,
        employee_id: this.form.get('employee_id')?.value,
        started_at: moment(this.form.get('started_at')?.value).format('YYYY-MM-DD HH:mm:ss'),
        finished_at: moment(this.form.get('finished_at')?.value).format('YYYY-MM-DD HH:mm:ss')
      };
      this.service.createTaskLog(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['listaRegistroTarea']);
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
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  ngOnInit(): void {
    
  }
}
