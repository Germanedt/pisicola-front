import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IListPondRequest,
  IListPondResponse,
  IPond,
} from 'src/app/models/Pond.model';
import { PondService } from 'src/app/services/pond.service';
import { SessionDataService } from 'src/app/services/session-data.service';

@Component({
  selector: 'app-lista-estanques',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaEstanqueComponent implements OnInit {
  listOfData: IPond[] = [];

  constructor(public router: Router, 
    public pondService: PondService, 
    public dataService: SessionDataService) {
  }

  public goToEdit(pond: IPond) {
    const state = {
      pond,
    };
    this.router.navigate(['/modificarEstanque'], { state });
  }

  public handlerConfirmDelete(id: number) {
    this.pondService.deletePond(id).subscribe((response) => {
      if (response) {
        this.loadData();
      }
    });
  }

  public loadData() {
    const params: IListPondRequest = {
      page: 1,
      perPage: 10,
    };
    this.pondService
      .listPonds(params, this.dataService.productiveUnit.id)
      .subscribe((response: IListPondResponse) => {
        this.listOfData = response.data;
      });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
