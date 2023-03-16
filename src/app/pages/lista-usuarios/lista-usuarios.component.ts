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
      id: 1,
      name: 'John Brown',
      email: 'jhon.brown@user.com',
      description: 'Más información del usuario',
      expand: false,
    },
    {
      id: 2,
      name: 'Jim Green',
      email: 'jim.green@user.com',
      description: 'Más información del usuario',
      expand: false,
    },
    {
      id: 3,
      name: 'Joe Black',
      email: 'joe.black@user.com',
      description: 'Más información del usuario',
      expand: false,
    }
  ];
}
