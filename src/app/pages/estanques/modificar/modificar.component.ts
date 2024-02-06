import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPond } from 'src/app/models/Pond.model';
import { PondService } from 'src/app/services/pond.service';

@Component({
  selector: 'app-modificar-tproducto',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less'],
})
export class ModificarEstanqueComponent implements OnInit {
  pond: IPond = {
    id: 0,
    productive_unit_id: 0,
    name: '',
    description: '',
    sensor_id: '',
    created_at: '',
    deleted_at: '',
    updated_at: '',
  };
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    sensor_id: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload = {
        id: this.pond.id,
        productive_unit_id: this.pond.productive_unit_id,
        name: this.form.get('name')?.value,
        sensor_id: this.form.get('sensor_id')?.value,
        description: this.form.get('description')?.value,
      };
      this.pondService.modifyPond(payload).subscribe((response) => {
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
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.pond = data['pond'];
      this.form.setValue({
        name: this.pond.name,
        sensor_id: this.pond.sensor_id,
        description: this.pond.description,
      });
    }
  }
  ngOnInit(): void {}
}
