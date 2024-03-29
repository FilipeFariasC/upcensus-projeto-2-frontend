
enum ResponseHttpStatus {
  CONTINUE = '100 CONTINUE',
  PROCESSING = '102 PROCESSING',
  OK = '200 OK',
  CREATED = '201 CREATED',
  ACCEPTED = '202 ACCEPTED',
  NO_CONTENT = '204 NO_CONTENT',
  FOUND = '302 FOUND',
  BAD_REQUEST = '400 BAD_REQUEST',
  UNAUTHORIZED = '401 UNAUTHORIZED',
  FORBIDDEN = '403 FORBIDDEN',
  NOT_FOUND = '404 NOT_FOUND',
  METHOD_NOT_ALLOWED = '405 METHOD_NOT_ALLOWED',
  NOT_ACCEPTABLE = '406 NOT_ACCEPTABLE',
  CONFLICT = '409 CONFLICT',
  UNSUPPORTED_MEDIA_TYPE = '415 UNSUPPORTED_MEDIA_TYPE',
  INTERNAL_SERVER_ERROR = '500 INTERNAL_SERVER_ERROR',
  NOT_IMPLEMENTED = '501 NOT_IMPLEMENTED',
  BAD_GATEWAY = '502 BAD_GATEWAY',
  SERVICE_UNAVAILABLE = '503 SERVICE_UNAVAILABLE',
  GATEWAY_TIMEOUT = '504 GATEWAY_TIMEOUT',
  INSUFFICIENT_STORAGE = '507 INSUFFICIENT_STORAGE'
}

export interface DomainModel {
  id: number;
  creation_time: Date;
}

export interface Response<T> {
  status: ResponseHttpStatus;
  endpoint: string;
  data: T;
  links: string[];
  errors: string[];
}
