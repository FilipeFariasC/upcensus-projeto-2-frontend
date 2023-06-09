import { DomainModel } from '../../../shared/interfaces/response';
import { ConfigurationResponse } from '../../configuration/shared/configuration.model';
import { FileType, FileTypeResponse, InputTemplateResponse } from '../../template/input/shared/input-template.model';
import { OutputTemplateResponse } from '../../template/output/shared/output-template.model';

export interface Record {
  [key: string]: string;
}

export interface AnswerResponse {
  [key: string]: Record;
}

interface ModuleResponse extends DomainModel {
  code: string;
  name: string;
  tags: string[];
  configuration: ConfigurationResponse;
  input_templates: InputTemplateResponse[];
  output_template: OutputTemplateResponse;
  has_answers: boolean;
  file_input_template_types: FileTypeResponse[];
}

interface ModuleRequest {
  code: string;
  name: string;
  tags?: string[];
  configuration?: string;
  input_templates?: string[];
  output_template?: string;
}

interface FileUploadRequest {
  file: File,
  fileType: FileType | string,
  ignoreHeaderRow?: boolean
}


export {
  ModuleResponse,
  ModuleRequest,
  FileUploadRequest
}

