import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployees, IListEmployeesRequest, IListEmployeesResponse } from 'src/app/models/Employee.model';
import { IProductiveUnit } from 'src/app/models/ProductiveUnit.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less'],
})
export class ListaEmpleadosComponent implements OnInit {
  listOfData: IEmployees[] = [];
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
    public service: EmployeesService
  ) {
    const data = this.router.getCurrentNavigation()?.extras.state;
    if (data) {
      this.productiveUnit = data['productiveUnit'];
    }
  }

  public goToEdit(employee: IEmployees) {
    const state = { employee };
    this.router.navigate(['/modificarEmpleado'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.service.deleteEmployee(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }
  public loadData() {
    const params: IListEmployeesRequest = {
      page: 1,
      perPage: 10,
    };
    this.service
      .listEmployess(params, this.productiveUnit.id)
      .subscribe((response: IListEmployeesResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
