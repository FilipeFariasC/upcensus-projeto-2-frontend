import { DomainModel } from '../../../shared/interfaces/response';
import { CharacteristicResponse } from '../../characteristic/shared/characteristic.model';

export enum Type {
  plainText = "PLAIN_TEXT",
  integer = "INTEGER",
  decimal = "DECIMAL",
  alphanumeric = "ALPHANUMERIC",
  alphabetic = "ALPHABETIC",
  date = "DATE",
  timestamp = "TIMESTAMP",
  boolean = "BOOLEAN"
}

export interface FieldResponse extends DomainModel {
  code: string;
  name: string;
  description: string;
  type: Type;
  required: boolean;
  characteristics: CharacteristicResponse[];
}

export interface FieldMinResponse extends DomainModel {
  code: string;
  name: string;
}

export interface FieldRequest {
  code: string;
  name: string;
  description?: string;
  type: Type;
  required: boolean;
  characteristics?: number[];
}
