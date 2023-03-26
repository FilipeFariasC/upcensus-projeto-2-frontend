import { DomainModel } from './../../../shared/interfaces/response';

export enum Attribute {
  TYPE,
	REQUIRED,
	MIN_LENGTH,
	MAX_LENGTH,
	MIN_VALUE,
	MAX_VALUE,
	PATTERN
}

export interface CharacteristicResponse extends DomainModel {
  attribute: Attribute;
  value: string;
  description: string;
}

export interface CharacteristicRequest {
  attribute: Attribute;
  value: string;
  description: string;
}
