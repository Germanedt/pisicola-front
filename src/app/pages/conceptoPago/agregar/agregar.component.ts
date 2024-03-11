import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreatePaymentConceptRequest } from 'src/app/models/PaymentConcept';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { PaymentConceptService } from 'src/app/services/paymentConcept.service';

@Component({
  selector: 'app-agregar-payment-concept',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarConceptoPagoComponent implements OnInit {
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
  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreatePaymentConceptRequest = {
        productive_unit_id: this.productiveUnit.id,
        name: this.form.get('name')?.value,
        description: this.form.get('description')?.value,
        required_tasks: this.form.get('requiredTasks')?.value,
      };
      this.service.createPaymentConcept(payload).subscribe((response) => {
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
  ) {}

  ngOnInit(): void {}
}
