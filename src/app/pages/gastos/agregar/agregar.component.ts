import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateExpenseRequest } from 'src/app/models/Expenses.model';
import { ExpensesService } from 'src/app/services/Expenses.service';
import { SessionDataService } from 'src/app/services/session-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-agregar-gasto',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarGastoComponent implements OnInit {
  public datetime: any;
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    value: [0, [Validators.required]],
    note: ['', [Validators.required]],
    manual_created_at: ['', Validators.required],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateExpenseRequest = {
        productive_unit_id: this.dataService.productiveUnit.id,
        name: this.form.get('name')?.value,
        value: this.form.get('value')?.value,
        note: this.form.get('note')?.value,
        manual_created_at: moment(
          this.form.get('manual_created_at')?.value
        ).format('YYYY-MM-DD HH:mm:ss'),
      };
      this.service.createExpense(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['listaGastos']);
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
    private router: Router,
    public dataService: SessionDataService,
    private service: ExpensesService
  ) {}

  ngOnInit(): void {}

  /**
   * @method onChangeDateTime
   */
  onChangeDateTime() {
    this.form.patchValue({
      manual_created_at: moment(this.datetime).format('YYYY-MM-DD HH:mm:ss'),
    });
  }
}
