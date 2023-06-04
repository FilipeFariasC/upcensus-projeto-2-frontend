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
interface CharacteristicResponse extends DomainModel {
  attribute: Attribute;
  value: string;
  description: string;
}

interface CharacteristicRequest {
  attribute: Attribute;
  value: string;
  description: string;
}

export {
  CharacteristicResponse,
  CharacteristicRequest
}
