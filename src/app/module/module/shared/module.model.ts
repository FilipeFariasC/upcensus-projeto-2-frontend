import { FieldMinResponse } from 'src/app/form/field/shared/field.model';
import { DomainModel } from '../../../shared/interfaces/response';
import { ConfigurationResponse } from '../../configuration/shared/configuration.model';
import { FileType, FileTypeResponse, InputTemplateResponse } from '../../template/input/shared/input-template.model';
import { OutputTemplateResponse } from '../../template/output/shared/output-template.model';
import { MetadataResponse } from '../metadata/shared/metadata.model';

export interface RecordResponse {
  identifier: AnswerResponse;
  entries: AnswerResponse[];
}

export interface AnswerResponse extends DomainModel {
  field: FieldMinResponse;
  value: string;
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
  metadata: MetadataResponse[];
}

interface ModuleRequest {
  code: string;
  name: string;
  tags?: string[];
  configuration?: string;
  input_templates?: string[];
  output_template?: string;
  metadata?: string[];
}

interface FileUploadRequest {
  file: File,
  fileType: FileType | string,
  ignoreHeaderRow?: boolean
}


export {
  FileUploadRequest, ModuleRequest, ModuleResponse
};

