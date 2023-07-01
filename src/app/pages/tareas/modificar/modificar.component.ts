import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ITask } from 'src/app/models/Task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less'],
})
export class ModificarTareaComponent implements OnInit {
  task: ITask = {
    id: 0,
    productive_unit_id: 0,
    name: '',
    description: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload = {
        id: this.task.id,
        productive_unit_id: this.task.productive_unit_id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
      };
      this.service.modifyTask(payload).subscribe((response) => {
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
      this.task = data['task'];
      this.productiveUnit = data['productiveUnit'];
      this.form.setValue({
        name: this.task.name,
        description: this.task.description,
      });
    }
  }
  ngOnInit(): void {}
}
