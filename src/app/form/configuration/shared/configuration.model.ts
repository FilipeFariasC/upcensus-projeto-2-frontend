import { DomainModel } from '../../../shared/interfaces/response';
import { ConfigurationConfigurationFieldResponse, ConfigurationFieldRequest, configurationFieldResponseListToRequestList } from '../configuration-field/shared/configuration-field.model';


export interface ConfigurationResponse extends DomainModel {
  code: string;
  name: string;
  identifierField: string;
  fields: ConfigurationConfigurationFieldResponse[];
}

export interface ConfigurationRequest {
  code: string;
  name: string;
  identifierField: string;
  fields: ConfigurationFieldRequest[];
}

export function configurationResponseToRequest(model: ConfigurationResponse): ConfigurationRequest {
  return {
    ...model,
    fields: configurationFieldResponseListToRequestList(model.fields)
  }
}

export function configurationResponseListToRequestList(list: ConfigurationResponse[]): ConfigurationRequest[] {
  return list.map(n=>configurationResponseToRequest(n));
}
