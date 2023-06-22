
export interface Pageable {
  page: number;
  size: number;
  [key: string]: any;
}

export interface PageableSort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean
}
export interface PagePageable {
  sort: PageableSort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Page<T> {
  content: T[];
  pageable: PagePageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: PageableSort;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

export interface Pagination {
  length?: number;
  index: number;
  size: number;
  sizeOptions: number[];
}
