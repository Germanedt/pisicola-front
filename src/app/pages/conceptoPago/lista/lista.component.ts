import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IListPaymentConceptRequest, IListPaymentConceptResponse, IPaymentConcept } from 'src/app/models/PaymentConcept';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { PaymentConceptService } from 'src/app/services/paymentConcept.service';

@Component({
  selector: 'app-lista-conceptos-pago',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaConceptosPagoComponent implements OnInit {
  listOfData: IPaymentConcept[] = [];
  productiveUnit: IProductiveUnit = {
    id: 0,
    name: '',
    description: '',
    address: '',
    is_active: false,
    deleted_at: ''
  }
  constructor(
    public router: Router,
    public service: PaymentConceptService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  public goToEdit(paymentConcept: IPaymentConcept) {
    const state = { paymentConcept, productiveUnit: this.productiveUnit };
    this.router.navigate(['/modificarConceptoPago'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.service.deletePaymentConcept(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public loadData() {
    const params: IListPaymentConceptRequest = {
      page: 1,
      perPage: 10,
    };
    this.service
      .listPaymentConcepts(params, this.productiveUnit.id)
      .subscribe((response: IListPaymentConceptResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
