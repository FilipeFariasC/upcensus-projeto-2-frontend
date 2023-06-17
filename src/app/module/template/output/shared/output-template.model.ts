import { DomainModel } from "src/app/shared/interfaces";

export interface OutputTemplateResponse extends DomainModel {
  code: string;
  name: string;
  layout: string;
}

export interface OutputTemplateRequest {
  code: string;
  name: string;
  layout: string;
}
