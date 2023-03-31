import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})

export class ListaEquiposComponent {
  constructor() {}
  isVisible = false;
  expandSet = new Set<number>();

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

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
      referencia: "FDF345",
      nombre: 'Equipo 1',
      precio: '5000000',
      vida_util: '360',
      fecha_compra: "20/03/2023"
    },
    {
      id: 2,
      referencia: "1234KJF",
      nombre: 'Equipo 2',
      precio: '2000000',
      vida_util: '120',
      fecha_compra: "20/03/2023"
    },
    {
      id: 3,
      referencia: "FHFHF76",
      nombre: 'Equipo 3',
      precio: '1000000',
      vida_util: '180',
      fecha_compra: "20/03/2023"
    },
  ];
}
