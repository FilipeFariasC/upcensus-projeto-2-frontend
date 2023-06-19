import { FieldResponse, Type } from "src/app/form/field/shared/field.model";
import { ConfigurationResponse } from "../../shared/configuration.model";
import { CharacteristicResponse } from "src/app/form/characteristic/shared/characteristic.model";

export interface ConfigurationConfigurationFieldResponse {
  id: number;
  field: FieldResponse;
  type: Type;
  required: boolean;
  characteristics: CharacteristicResponse[];
}


export interface ConfigurationFieldResponse {
  id: number;
  configuration: ConfigurationResponse;
  field: FieldResponse;
  type: Type;
  required: boolean;
  characteristics: CharacteristicResponse[];
}

export interface ConfigurationFieldRequest {
  fieldCode: string;
  type?: Type;
  required?: boolean;
  characteristics?: number[];
}


export function configurationFieldResponseToRequest(model: ConfigurationConfigurationFieldResponse): ConfigurationFieldRequest {
  return {
    fieldCode: model.field.code,
    type: model.type,
    required: model.required,
    characteristics: model.characteristics.map(n=>n.id)
  }
}

export function configurationFieldResponseListToRequestList(list: ConfigurationConfigurationFieldResponse[]): ConfigurationFieldRequest[] {
  return list.map(n=>configurationFieldResponseToRequest(n));
}
