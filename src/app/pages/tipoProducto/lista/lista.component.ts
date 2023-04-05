import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tproducto',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.less']
})
export class ListaTipoProductoComponent {
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
      nombre: 'Tipo 1',
      descripcion: 'tipo de producto desc',
      expand: false,
    },
    {
      id: 2,
      nombre: 'Tipo 2',
      descripcion: 'tipo de producto desc',
      expand: false,
    },
    {
      id: 3,
      nombre: 'Tipo 3',
      descripcion: 'tipo de producto desc',
      expand: false,
    }
  ];
}
