
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
  MODULES = 'modulos',
  MODULE_ABSOLUTE = 'modulo/modulos',
  TEMPLATE = 'modelos',
  TEMPLATE_ABSOLUTE = 'modulo/modelos',
  INPUT = "entrada",
  INPUT_TEMPLATE_ABSOLUTE = 'modulo/modelos/entrada',
  OUTPUT = "saida",
  OUTPUT_TEMPLATE_ABSOLUTE = 'modulo/modelos/saida',
  ANSWERS = ':id/registros',
  ANSWER_ABSOLUTE = 'modulo/modulos/:idModule/registro/:idAnswer',
  ANSWERS_ABSOLUTE = 'modulo/modulos/registro',
  METADATA = 'metadados',
  METADATA_ABSOLUTE = 'modulo/modulos/metadados',
  MODULE_METADATA = ':id/metadados',
  ANSWERS_SUFFIX = 'registros',
  ANSWER = ':idAnswer'
}

export default AppRoute;
