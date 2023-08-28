const host = 'http://3.144.25.191:8080';
export const environment = {
  production: false,
  AUTH_LOGIN_SERVICE: host + '/login',
  AUTH_LOGOUT_SERVICE: host + '/logout',
  USER_TYPE_LIST_SERVICE: host + '/user_types/list',
  USER_LIST_SERVICE: host + '/users/list',
  USER_CREATE_MODIFY_DELETE_SERVICE: host + '/users', //Pendiente Eliminar
  PRODUCT_TYPE_LIST_SERVICE: host + '/fishes/list',
  PRODUCT_TYPE_CREATE_MODIFY_DELETE_SERVICE: host + '/fishes',
  PRODUCTIVE_UNIT_LIST_SERVICE: host + '/productive_units/list',
  PRODUCTIVE_UNIT_CREATE_MODIFY_DELETE_SERVICE: host + '/productive_units', //Pendiente Eliminar
  PRODUCTIVE_UNIT_ADD_USER: host + '/productive_units/users',
  POND_LIST_SERVICE: host + '/ponds/list_by_productive_unit',
  POND_CREATE_MODIFY_DELETE_SERVICE: host + '/ponds',
  PRODUCT_LIST_ALL_SERVICE: host + '/fish_steps/list/all',
  PRODUCT_LIST_BY_UNIT_SERVICE: host + '/fish_steps/list_by_productive_unit',
  PRODUCT_CREATE_MODIFY_DELETE_SERVICE: host + '/fish_steps',
  STAT_CREATE_MODIFY_DELETE_SERVICE: host + '/fish_steps/stats',
  STAT_LIST_BY_PRODUCT_SERVICE: host + '/fish_steps/stats/list_by_fish_step',
  SOWING_LIST_SERVICE: host + '/sowings/list_by_productive_unit',
  SOWING_CREATE_MODIFY_DELETE_SERVICE: host + '/sowings',
  SOWING_LIST_STATS_SERVICE: host + '/sowings/stats/list_by_sowing',
  SOWING_LIST_HISTORY_STATS_SERVICE: host + '/sowings/stats/list_group_by_keys',
  EMPLOYEES_LIST_SERVICE: host + '/employees/list_by_productive_unit/',
  EMPLOYEES_CREATE_MODIFY_DELETE_SERVICE: host + '/employees',
  TASK_LIST_SERVICE: host + '/tasks/list_by_productive_unit/',
  TASK_CREATE_MODIFY_DELETE_SERVICE: host + '/tasks',
  TASKLOG_LIST_SERVICE: host + '/tasks/logs/list_by_productive_unit/',
  TASKLOG_CREATE_MODIFY_DELETE_SERVICE: host + '/tasks/logs',
  //Pendientes
  USER_GET_POFILE_SERVICE: host + '/users/profile',
};
