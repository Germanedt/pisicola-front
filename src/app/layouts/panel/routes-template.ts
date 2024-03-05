import { INavigationLink } from 'src/app/models/NavigationLink.model';

export const routeButtons: INavigationLink[] = [
  {
    title: 'Unidades productivas',
    icon: 'build',
    ionicon: 'person-outline',
    actions: [
      {
        route: '/listaUnidades',
        title: 'Lista de Unidades',
      },
      {
        route: '/agregarUnidad',
        title: 'Agregar',
      },
    ],
    roles: [1],
  },
  {
    title: 'Usuarios',
    icon: 'user',
    ionicon: 'person-outline',
    actions: [
      {
        route: '/listaUsuarios',
        title: 'Lista de usuarios',
      },
      {
        route: '/agregarUsuario',
        title: 'Agregar',
      },
    ],
    roles: [1, 2],
  },
  {
    title: 'Tipos de producto',
    icon: 'unordered-list',
    ionicon: 'list-outline',
    actions: [
      {
        route: '/listaTipoProducto',
        title: 'Lista de Tipos',
      },
      {
        route: '/agregarTipoProducto',
        title: 'Agregar',
      },
    ],
    roles: [1],
  },
  {
    title: 'Tipos de producto',
    icon: 'unordered-list',
    ionicon: 'list-outline',
    actions: [
      {
        route: '/listaTipoProducto',
        title: 'Lista de Tipos',
      },
    ],
    roles: [2],
  },
  {
    title: 'Productos',
    icon: 'database',
    ionicon: 'file-tray-stacked-outline',
    actions: [
      {
        route: '/listaProductos',
        title: 'Lista de productos',
      },
      {
        route: '/agregarProducto',
        title: 'Agregar',
      },
    ],
    roles: [1, 2],
  },
  {
    title: 'Cosechas',
    icon: 'rocket',
    ionicon: 'rocket-outline',
    actions: [
      {
        route: '/listaCosechas',
        title: 'Lista de cosechas',
      },
      {
        route: '/agregarCosecha',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Estanques',
    icon: 'block',
    ionicon: 'copy-outline',
    actions: [
      {
        route: '/listaEstanques',
        title: 'Lista de estanques',
      },
      {
        route: '/agregarEstanque',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Gastos', //Pendiente
    icon: 'shopping',
    ionicon: 'bag-outline',
    actions: [
      {
        route: '/listaGastos',
        title: 'Lista de gastos',
      },
      {
        route: '/agregarGasto',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Empleados',
    icon: 'contacts',
    ionicon: 'people-outline',
    actions: [
      {
        route: '/listaEmpleados',
        title: 'Lista de empleados',
      },
      {
        route: '/agregarEmpleado',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Tareas',
    icon: 'profile',
    ionicon: 'list-outline',
    actions: [
      {
        route: '/listaTareas',
        title: 'Lista de tareas',
      },
      {
        route: '/agregarTarea',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Registro de tareas',
    icon: 'reconciliation',
    ionicon: 'reader-outline',
    actions: [
      {
        route: '/listaRegistroTareas',
        title: 'Lista de RegistroTareas',
      },
      {
        route: '/agregarRegistroTarea',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Conceptos de pagos',
    icon: 'tag',
    ionicon: 'pricetag-outline',
    actions: [
      {
        route: '/listaConceptosPago',
        title: 'Lista conceptos de pago',
      },
      {
        route: '/agregarConceptoPago',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Pagos',
    icon: 'tags',
    ionicon: 'pricetags-outline',
    actions: [
      {
        route: '/listaPagos',
        title: 'Lista de pagos',
      },
      {
        route: '/agregarPago',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
  {
    title: 'Suministros',
    icon: 'shopping-cart',
    ionicon: 'cart-outline',
    actions: [
      {
        route: '/listaProductos',
        title: 'Lista de productos',
      },
      {
        route: '/agregarProducto',
        title: 'Agregar',
      },
    ],
    roles: [2],
  },
];
