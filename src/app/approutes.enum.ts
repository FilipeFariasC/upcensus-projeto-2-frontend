
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
  FIELD_ABSOLUTE = 'coleta/campo',
  CHARACTERISTIC = 'caracteristica',
  CHARACTERISTIC_ABSOLUTE = 'coleta/caracteristica',
  CONFIGURATION = 'configuracao',
  CONFIGURATION_ABSOLUTE = 'coleta/configuracao',

  MODULE = 'modulo',
  MODULE_ABSOLUTE = 'modulo/modulo',
  TEMPLATE = 'modelo',
  TEMPLATE_ABSOLUTE = 'modulo/modelo',
  INPUT = "entrada",
  INPUT_TEMPLATE_ABSOLUTE = 'modulo/modelo/entrada',
  OUTPUT = "saida",
  OUTPUT_TEMPLATE_ABSOLUTE = 'modulo/modelo/saida',
  ANSWERS = ':id/registros',
  ANSWERS_SUFFIX = 'registros'
}

export default AppRoute;
