import { Component, OnInit } from '@angular/core';
import { IListSupplyRequest, IListSupplyResponse, ISupply } from 'src/app/models/Supply.model';
import { SessionDataService } from 'src/app/services/session-data.service';
import { SupplyService } from 'src/app/services/supplies.service';

@Component({
  selector: 'app-lista-insumos',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaInsumosComponent implements OnInit{
  listOfData: ISupply[];
  allDataSupplies: ISupply[];
  filtro: string;
  constructor(public sessionService: SessionDataService, public service: SupplyService){
    this.listOfData = [];
    this.allDataSupplies = []
    this.filtro = 'ALL';
  }
  public filterResults() {
    if (this.filtro === 'ALL') {
      this.listOfData = this.allDataSupplies;
    } else {
      this.listOfData = this.allDataSupplies.filter((item) => item.use_type === this.filtro);
    }
    
  }
  loadData() {
    const params: IListSupplyRequest = {
      page: 0,
      perPage: 0
    }
    this.service.listSupplies(params).subscribe((response: IListSupplyResponse) =>{
      console.log(response);
      this.allDataSupplies = response.data;
      this.listOfData = this.allDataSupplies;
    });
  }
  ngOnInit(): void {
    this.loadData();
  }
}
