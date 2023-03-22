import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.less']
})
export class ListaUsuariosComponent {
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
      id: 1094726234,
      name: 'John Brown',
      email: 'jhon.brown@user.com',
      cargo: 'Administrador',
      expand: false,
    },
    {
      id: 7652431,
      name: 'Jim Green',
      email: 'jim.green@user.com',
      cargo: 'Productor',
      expand: false,
    },
    {
      id: 98235412,
      name: 'Joe Black',
      email: 'joe.black@user.com',
      cargo: 'Investigador',
      expand: false,
    }
  ];
}
