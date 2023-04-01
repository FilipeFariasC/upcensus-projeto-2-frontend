
export enum AppRoute {
  HOME = 'home',
  NOT_FOUND = 'nao-encontrada',

  // GENERICOS

  REGISTER = 'cadastrar',
  VIEW = ':id',
  EDIT_SUFFIX = 'editar',
  EDIT = `:id/editar`,

  // MODULOS

  FORM = 'coleta',
  FIELD = 'campo',
  CHARACTERISTIC = 'caracteristica',
}

export default AppRoute;
