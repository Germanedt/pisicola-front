import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ILoginRequest,
  ILoginResponse,
} from 'src/app/models/Authentication.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    //Borrar
    userName: [
      'manager_two@pond.com',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['12345678', [Validators.required]],
    remember: [true],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: ILoginRequest = {
        email: this.form.get('userName')?.value,
        password: this.form.get('password')?.value,
      };
      this.authService.login(payload).subscribe((response: ILoginResponse) => {
        this.dataService.setLoginData(response);
        this.router.navigate(['/listaUnidades']);
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
    private authService: AuthenticationService,
    private dataService: SessionDataService,
    private router: Router
  ) {}
  ngOnInit(): void {}
}
