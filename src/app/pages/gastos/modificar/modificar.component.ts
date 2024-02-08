import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateExpenseRequest, IExpense, IModifyExpenseRequest } from 'src/app/models/Expenses.model';
import { ExpensesService } from 'src/app/services/Expenses.service';
import { SessionDataService } from 'src/app/services/session-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modificar-gasto',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less'],
})
export class ModificarGastoComponent implements OnInit {
  expense: IExpense = {
    id: 0,
    productive_unit_id: 0,
    name: '',
    value: 0,
    note: '',
    manual_created_at: '',
    created_at: '',
    updated_at: '',
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    value: [0, [Validators.required]],
    note: ['', [Validators.required]],
    manual_created_at: ['', Validators.required],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: IModifyExpenseRequest = {
        id: this.expense.id,
        productive_unit_id: this.dataService.productiveUnit.id,
        name: this.form.get('name')?.value,
        value: this.form.get('value')?.value,
        note: this.form.get('note')?.value,
        manual_created_at: moment(
          this.form.get('manual_created_at')?.value
        ).format('YYYY-MM-DD HH:mm:ss'),
      };
      this.service.modifyExpense(payload).subscribe((response) => {
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
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.expense = data['expense'];
      this.form.setValue({
        name: this.expense.name,
        value: this.expense.value,
        note: this.expense.note,
        manual_created_at: this.expense.manual_created_at
      });
    }
  }

  ngOnInit(): void {}
}
