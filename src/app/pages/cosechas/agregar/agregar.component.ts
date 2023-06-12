import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IPond } from 'src/app/models/Pond.model';
import { IProduct } from 'src/app/models/Product.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { ICreateSowingRequest } from 'src/app/models/Sowing.model';
import { PondService } from 'src/app/services/pond.service';
import { ProductService } from 'src/app/services/product.service';
import { SowingService } from 'src/app/services/sowing.service';

@Component({
  selector: 'app-agregar-cosecha',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.less'],
})
export class AgregarCosechaComponent implements OnInit {
  ponds: IPond[] = [];
  products: IProduct[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: '',
  };
  form: FormGroup = this.fb.group({
    pond_id: ['', [Validators.required]],
    fish_step_id: ['', [Validators.required]],
    total_fish: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.form.valid) {
      const payload: ICreateSowingRequest = {
        pond_id: this.form.get('pond_id')?.value,
        fish_step_id: this.form.get('fish_step_id')?.value,
        total_fish: this.form.get('total_fish')?.value,
      };
      this.service.createSowing(payload).subscribe((response) => {
        if (response) {
          const state = { productiveUnit: this.productiveUnit };
          this.router.navigate(['/listaCosechas'], { state });
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
    private productService: ProductService,
    private service: SowingService,
    private router: Router
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  private loadDataSelect() {
    forkJoin({
      ponds: this.pondService.listPonds(
        {
          page: 1,
          perPage: 10,
        },
        this.productiveUnit.id
      ),
      products: this.productService.listByProductiveUnitProduct(
        {
          page: 1,
          perPage: 10,
        },
        this.productiveUnit.id
      ),
    }).subscribe((data) => {
      this.ponds = data.ponds.data;
      this.products = data.products.data;
    });
  }
  ngOnInit(): void {
    this.loadDataSelect();
  }
}
