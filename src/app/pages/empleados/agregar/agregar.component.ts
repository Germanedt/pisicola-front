import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateEmployeeRequest } from 'src/app/models/Employee.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarEmpleadoComponent implements OnInit {
  form: FormGroup = this.fb.group({
    identifier_type: ['', [Validators.required]],
    identifier: ['', [Validators.required]],
    full_name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    occupation: ['', [Validators.required]],
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
      const payload: ICreateEmployeeRequest = {
        productive_unit_id: this.productiveUnit.id,
        identifier_type: this.form.get('identifier_type')?.value,
        identifier: this.form.get('identifier')?.value,
        full_name: this.form.get('full_name')?.value,
        phone: this.form.get('phone')?.value,
        occupation: this.form.get('occupation')?.value,
      };
      this.service.createEmployee(payload).subscribe((response) => {
        if (response) {
          const state = {
            productiveUnit: this.productiveUnit,
          };
          this.router.navigate(['listaEmpleados'], { state });
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
    private service: EmployeesService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  ngOnInit(): void {}
}
