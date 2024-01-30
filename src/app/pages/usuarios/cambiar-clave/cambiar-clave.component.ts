import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, IUserModifyRequest } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cambiar-clave-usuario',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.less'],
})
export class CambiarClaveUsuarioComponent implements OnInit {
  user: IUser = {
    id: 0,
    user_type_id: 0,
    email: '',
    full_name: '',
    is_active: false,
    deleted_at: ''
  }
  form: FormGroup = this.fb.group({
    password: ['', [Validators.required]],
    passwordConfirmation: ['', [Validators.required]],
  });

  public submitForm(): void {
    if (this.form.valid) {
      const payload: IUserModifyRequest = {
        id: this.user.id,
        password: this.form.get('password')?.value,
        password_confirmation: this.form.get('passwordConfirmation')?.value
      };
      this.usersService.modifyUser(payload).subscribe((response) => {
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
    private router: Router,
    private usersService: UsersService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.user = data['user'];
    }    
  }

  ngOnInit(): void {}
}
