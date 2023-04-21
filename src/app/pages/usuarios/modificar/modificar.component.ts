import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.less'],
})
export class ModificarUsuarioComponent implements OnInit {
  form: FormGroup = this.fb.group({
    fullName: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    userTypeId: ['', [Validators.required]]
  });
  idUser = 0;
  submitForm(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
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
    private fb: UntypedFormBuilder,
    private activeted: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.idUser = parseInt(this.activeted.snapshot.paramMap.get('id')!);
    //this.usersService.getUserById(this.idUser).subscribe((response: IUser) => {
      this.form.patchValue({
        fullName: 'German Donoso',//response.full_name,
        email: 'german@pond.com', //response.email,
        userTypeId: 1 //response.user_type_id,
      })
    //})
  }
}
