import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ICreateProductiveUnitUser,
  IListProductiveUnitRequest,
  IProductiveUnit,
} from 'src/app/models/ProductiveUnit.model';
import { IUsersCreateRequest } from 'src/app/models/User.model';
import { IUserType } from 'src/app/models/UserType.model';
import { ProductiveUnitService } from 'src/app/services/productiveUnits.service';
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
    userTypeId: [0, [Validators.required]],
    productiveUnitId: [0],
    password: ['', [Validators.required]],
    passwordConfirmation: ['', [Validators.required]],
  });
  userTypes: IUserType[] = [];
  productiveUnits: IProductiveUnit[] = [];
  isAdminUser = true;

  submitForm(): void {
    if (this.form.valid) {
      const payload: IUsersCreateRequest = {
        full_name: this.form.get('fullName')?.value,
        email: this.form.get('email')?.value,
        user_type_id: parseInt(this.form.get('userTypeId')?.value),
        password: this.form.get('password')?.value,
        password_confirmation: this.form.get('passwordConfirmation')?.value,
      };
      this.usersService.createUser(payload).subscribe((response) => {
        if (response) {
          const payload: ICreateProductiveUnitUser = {
            user_id: response.id,
            productive_unit_id: this.form.get('productiveUnitId')?.value,
          };
          this.productiveUnitService
            .addUserToProductiveUnit(payload)
            .subscribe((res) => {
              if (res) {
                this.router.navigate(['listaUsuarios']);
              }
            });
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
  listenUserTypeChanges(): void {
    this.form.get('userTypeId')?.valueChanges.subscribe((val) => {
      console.log(val);
      const userTypeSelected = this.userTypes.find((item) => item.id === val);
      this.isAdminUser = userTypeSelected?.key === 'admin';
      if (this.productiveUnits.length === 0 && !this.isAdminUser) {
        const params: IListProductiveUnitRequest = {
          page: 1,
          perPage: 100000,
        };
        this.productiveUnitService
          .listProductiveUnits(params)
          .subscribe((res) => {
            this.productiveUnits = res.data;
          });
      }
    });
  }
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private productiveUnitService: ProductiveUnitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usersService.getUserTypes().subscribe((res) => {
      this.userTypes = res;
      this.listenUserTypeChanges();
    });
  }
}
