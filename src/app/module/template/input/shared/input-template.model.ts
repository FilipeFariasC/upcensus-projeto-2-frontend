import { DomainModel } from "src/app/shared/interfaces";


export enum Type {
  csv = "CSV",
  form = "FORM",
  google = "GOOGLE",
  json = "JSON",
  ods = "ODS",
  text = "TEXT",
  xls = "XLS",
  xlsx = "XLSX",
  yaml = "YAML",
}

export interface Mapping {
  [key: string]: string
}

export interface InputTemplateResponse extends DomainModel {
  code: string;
  name: string;
  type: Type;
  mappings: Mapping;
}

export interface InputTemplateRequest {
  code: string;
  name: string;
  type: Type;
  mappings: Mapping;
}
