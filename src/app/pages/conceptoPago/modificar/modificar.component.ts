import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IModifyPaymentConceptRequest,
  IPaymentConcept,
} from 'src/app/models/PaymentConcept';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { PaymentConceptService } from 'src/app/services/paymentConcept.service';

@Component({
  selector: 'app-modificar-tproducto',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarConceptoPagoComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    requiredTasks: [false, Validators.required],
  });
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  paymentConcept: IPaymentConcept = {
    id: 0,
    productive_unit_id: 0,
    name: '',
    description: '',
    required_tasks: false,
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };
  submitForm(): void {
    if (this.form.valid) {
      const payload: IModifyPaymentConceptRequest = {
        id: this.paymentConcept.id,
        productive_unit_id: this.productiveUnit.id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        required_tasks: this.form.get('requiredTasks')?.value,
      };
      this.service.modifyPaymentConcept(payload).subscribe((response) => {
        if (response) {
          const state = { productiveUnit: this.productiveUnit };
          this.router.navigate(['listaConceptosPago'], { state });
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
    private service: PaymentConceptService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
      this.paymentConcept = data['paymentConcept'];
      this.form.setValue({
        name: this.paymentConcept.name,
        description: this.paymentConcept.description,
        requiredTasks: this.paymentConcept.required_tasks,
      });
    }
  }
  ngOnInit(): void {}
}
