import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsersCreateRequest } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarUsuarioComponent implements OnInit {
  form: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    userTypeId: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordConfirmation: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: IUsersCreateRequest = {
        full_name: this.form.get('fullName')?.value,
        email: this.form.get('email')?.value,
        user_type_id: this.form.get('userTypeId')?.value,
        password: this.form.get('password')?.value,
        password_confirmation: this.form.get('passwordConfirmation')?.value,
      };
      this.usersService.createUser(payload).subscribe((response) => {
        if (response) {
          this.router.navigate(['listaUsuarios']);
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
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
