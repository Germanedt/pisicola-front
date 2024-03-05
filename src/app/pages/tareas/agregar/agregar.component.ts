import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ICreateTaskRequest } from 'src/app/models/Task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarTareaComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateTaskRequest = {
        productive_unit_id: this.productiveUnit.id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
      };
      this.service.createTask(payload).subscribe((response) => {
        if (response) {
          const state = {
            productiveUnit: this.productiveUnit,
          };
          this.router.navigate(['listaTareas'], { state });
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
    private service: TaskService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  ngOnInit(): void {}
}
