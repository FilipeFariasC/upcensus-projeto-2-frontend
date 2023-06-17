import { DomainModel } from "src/app/shared/interfaces";

export interface MetadataResponse extends DomainModel {
  code: string;
  name: string;
  value: string;
}

export interface MetadataRequest {
  code: string;
  name: string;
  value: string;
}
