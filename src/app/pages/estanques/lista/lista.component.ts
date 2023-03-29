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
      nombre: 'Filandia',
      direccion: 'Vereda xyz km 6',
      descripcion: 'hay 6 lagos',
      expand: false,
    },
    {
      id: 2,
      nombre: 'Circacia',
      direccion: 'K6 via pereira',
      descripcion: 'cultivan solo x pez',
      expand: false,
    },
    {
      id: 3,
      nombre: 'Genova',
      direccion: 'vereda zyx finca abc',
      descripcion: 'hay de todo',
      expand: false,
    }
  ];
}
