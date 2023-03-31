import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaInsumosComponent {
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
      nombre: 'Insumo 1',
      precio: '$20.000',
      cantidad: '60',
      unidad: 'Kg',
      fecha_compra: "20/03/2023"
    },
    {
      id: 2,
      nombre: 'Insumo 2',
      precio: '$100.000',
      cantidad: '100',
      unidad: 'Kg',
      fecha_compra: "20/03/2023"
    },
    {
      id: 3,
      nombre: 'Insumo 3',
      precio: '$45.000',
      cantidad: '10',
      unidad: 'Litros',
      fecha_compra: "20/03/2023"
    },
  ];
}
