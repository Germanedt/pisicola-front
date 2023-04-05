import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaGastosComponent {
  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  listOfData = [
    {
      id: 1,
      nombre: 'Servicio de luz',
      precio: '$20.000',
      descripcion: "",
      fecha_compra: "20/03/2023"
    },
    {
      id: 2,
      nombre: 'Servicio de agua',
      precio: '$100.000',
      descripcion: "",
      fecha_compra: "20/03/2023"
    }
  ];
}
