import { Page, Pageable } from './../interfaces/pageable';
import { Injectable, Injector } from '@angular/core';;
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';



@Injectable()
export abstract class BaseCrudService<Request, Model> {

  private readonly _httpClient: HttpClient;
  protected readonly abstract _baseUrl: string;


  constructor(protected _injector: Injector) {
    this._httpClient = this._injector.get(HttpClient);
  }

  protected get httpClient(): HttpClient {
    return this._httpClient;
  }
  protected get baseUrl(): string {
    return this._baseUrl;
  }

  getAll (): Observable<Response<Model[]>> {
    return this.httpClient.get<Response<Model[]>>(this.buildUrl("all"));
  }

  findAll (pageable?: Pageable): Observable<Response<Page<Model>>> {
    return this.httpClient.get<Response<Page<Model>>>(this.baseUrl, {params: pageable});
  }
  findById (id: number): Observable<Response<Model>> {
    return this.httpClient.get<Response<Model>>(this.buildUrl(id.toString()));
  }

  register (model: Request): Observable<Response<Model>> {
    return this.httpClient.post<Response<Model>>(this.baseUrl, model);
  }

  update(id: number, model: Request): Observable<Response<Model>> {
    return this.httpClient.put<Response<Model>>(this.buildUrl(id.toString()), model);
  }

  deleteById (id: number): Observable<void> {
    return this.httpClient.delete<void>(this.buildUrl(id.toString()));
  }

  protected buildUrl(...paths: string[]): string {
    const path = paths ? paths.join('/') : paths;
    return `${this._baseUrl}/${path}`
  }
}
