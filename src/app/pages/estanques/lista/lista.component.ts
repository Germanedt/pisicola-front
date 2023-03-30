import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-estanques',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaEstanquesComponent {
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
      nombre: 'Estanque 1',
      unidad: 'Circacia',
      descripcion: 'hay 6 lagos',
      expand: false,
    },
    {
      id: 2,
      nombre: 'Estanque 2',
      unidad: 'Genova',
      descripcion: 'cultivan solo x pez',
      expand: false,
    },
    {
      id: 3,
      nombre: 'Estanque 3',
      unidad: 'Filandia',
      descripcion: 'hay de todo',
      expand: false,
    }
  ];
}
