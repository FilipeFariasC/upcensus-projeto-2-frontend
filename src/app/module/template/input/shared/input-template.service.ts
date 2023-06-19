import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from 'src/environments/environment';
import { InputTemplateRequest, InputTemplateResponse, Type } from './input-template.model';
import { EnumOptions, Response } from 'src/app/shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class InputTemplateService extends DomainService<InputTemplateRequest, InputTemplateResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/module/templates/input`;

  typeOptions(): Observable<Response<EnumOptions<Type>>> {
    return this.httpClient.get<Response<EnumOptions<Type>>>(this.buildUrl("types"));
  }
}
