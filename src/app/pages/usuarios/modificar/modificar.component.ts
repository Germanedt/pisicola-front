import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, IUserModifyRequest } from 'src/app/models/User.model';
import { IUserType } from 'src/app/models/UserType.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less'],
})
export class ModificarUsuarioComponent implements OnInit {
  user: IUser = {
    id: 0,
    user_type_id: 0,
    email: '',
    full_name: '',
    is_active: false,
    deleted_at: ''
  }
  form: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    userTypeId: [0, [Validators.required]],
  });
  userTypes: IUserType[] = [];

  public submitForm(): void {
    if (this.form.valid) {
      const payload: IUserModifyRequest = {
        id: this.user.id,
        full_name: this.form.get('fullName')?.value,
        email: this.form.get('email')?.value,
        user_type_id: this.form.get('userTypeId')?.value,
        password: '',
        password_confirmation: ''
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
      this.form.setValue(
        {
          fullName: this.user.full_name,
          email: this.user.email,
          userTypeId: this.user.user_type_id
        }
      )
      
    }    
  }

  ngOnInit(): void {
    this.usersService.getUserTypes().subscribe((res) => {
      this.userTypes = res;
    })
  }
}
