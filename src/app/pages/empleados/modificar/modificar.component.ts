import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployees, IModifyEmployeeRequest } from 'src/app/models/Employee.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less']
})
export class ModificarEmpleadoComponent implements OnInit {
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
    deleted_at: ''
  }
  employee: IEmployees = {
    id: 0,
    productive_unit_id: 0,
    identifier_type: '',
    identifier: '',
    full_name: '',
    phone: '',
    occupation: '',
    created_at: '',
    updated_at: '',
    deleted_at: ''
  };

  submitForm(): void {
    if (this.form.valid) {
      const payload: IModifyEmployeeRequest = {
        id:this.employee.id,
        identifier_type: this.form.get('identifier_type')?.value,
        identifier: this.form.get('identifier')?.value,
        full_name: this.form.get('full_name')?.value,
        phone: this.form.get('phone')?.value,
        occupation: this.form.get('occupation')?.value,
      };
      this.service.modifyEmployee(payload).subscribe((response) => {
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
      this.employee = data['employee'];
      this.productiveUnit = data['productiveUnit'];
      this.form.setValue(
        {
          identifier_type: this.employee.identifier_type,
          identifier: this.employee.identifier,
          full_name: this.employee.full_name,
          phone: this.employee.phone,
          occupation: this.employee.occupation,
        }
      )
      
    }
  }
  ngOnInit(): void {}
}
