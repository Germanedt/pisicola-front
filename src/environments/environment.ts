export const environment = {
  production: false,
  AUTH_LOGIN_SERVICE: 'http://18.223.195.235:8080/login',
  AUTH_LOGOUT_SERVICE: 'http://18.223.195.235:8080/logout',
  USER_TYPE_LIST_SERVICE: 'http://18.223.195.235:8080/user_types/list',
  USER_LIST_SERVICE: 'http://18.223.195.235:8080/users/list',
  USER_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/users',//Pendiente Eliminar
  PRODUCT_TYPE_LIST_SERVICE: 'http://18.223.195.235:8080/fishes/list',
  PRODUCT_TYPE_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/fishes',
  PRODUCTIVE_UNIT_LIST_SERVICE: 'http://18.223.195.235:8080/productive_units/list',
  PRODUCTIVE_UNIT_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/productive_units',//Pendiente Eliminar
  POND_LIST_SERVICE: 'http://18.223.195.235:8080/ponds/list_by_productive_unit',
  POND_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/ponds',
  PRODUCT_LIST_ALL_SERVICE: 'http://18.223.195.235:8080/fish_steps/list/all',
  PRODUCT_LIST_BY_UNIT_SERVICE: 'http://18.223.195.235:8080/fish_steps/list_by_productive_unit',
  PRODUCT_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/fish_steps',
  STAT_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/fish_steps/stats',
  STAT_LIST_BY_PRODUCT_SERVICE: 'http://18.223.195.235:8080/fish_steps/stats/list_by_fish_step',
  SOWING_LIST_SERVICE: 'http://18.223.195.235:8080/sowings/list_by_productive_unit',
  SOWING_CREATE_MODIFY_DELETE_SERVICE: 'http://18.223.195.235:8080/sowings',
  SOWING_LIST_STATS_SERVICE: 'http://18.223.195.235:8080/sowings/stats/list_by_sowing',
  SOWING_LIST_HISTORY_STATS_SERVICE: 'http://18.223.195.235:8080/sowings/stats/list_group_by_keys',
  
  //Pendientes
  USER_GET_POFILE_SERVICE: 'http://18.223.195.235:8080/users/profile',
  
};
