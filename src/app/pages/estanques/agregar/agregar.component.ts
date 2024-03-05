import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreatePondRequest } from 'src/app/models/Pond.model';
import { PondService } from 'src/app/services/pond.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-agregar-estanques',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarEstanqueComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    sensor_id: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreatePondRequest = {
        productive_unit_id: this.dataService.productiveUnit.id,
        name: this.form.get('name')?.value,
        sensor_id: this.form.get('sensor_id')?.value,
        description: this.form.get('description')?.value,
      };
      this.pondService.createPond(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['/listaEstanques']);
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
    private pondService: PondService,
    private router: Router,
    public dataService: SessionDataService
  ) {}

  ngOnInit(): void {}
}
