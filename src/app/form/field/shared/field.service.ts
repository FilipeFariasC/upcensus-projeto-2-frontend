import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnumOption, Response } from 'src/app/shared/interfaces';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from '../../../../environments/environment';
import { FieldRequest, FieldResponse, Type } from './field.model';


@Injectable({
  providedIn: 'root'
})
export class FieldService extends DomainService<FieldRequest, FieldResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/form/fields`;

  typeOptions(): Observable<Response<EnumOption<Type>[]>> {
    return this.httpClient.get<Response<EnumOption<Type>[]>>(this.buildUrl("types"));
  }
}
