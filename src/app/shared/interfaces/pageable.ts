
export interface Pageable {
  page: number;
  size: number;
  [key: string]: any;
}

export interface Page<T> {
  content: T[];
  size: number;
  numberOfElements: number;
  totalElements: number;
}
