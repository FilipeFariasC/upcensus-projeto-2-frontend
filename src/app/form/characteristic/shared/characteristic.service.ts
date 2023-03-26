import { Response } from './../../../shared/interfaces/response';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from '../../../../environments/environment';
import { EnumOption } from '../../../shared/interfaces/enum-option';
import { CharacteristicRequest } from "./characteristic.form";
import { Attribute, CharacteristicResponse } from './characteristic.model';


@Injectable({
  providedIn: 'root'
})
export class CharacteristicService extends DomainService<CharacteristicRequest, CharacteristicResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/form/characteristics`;


  attributeOptions(): Observable<Response<EnumOption<Attribute>[]>> {
    return this.httpClient.get<Response<EnumOption<Attribute>[]>>(this.buildUrl("attributes"));
  }
}
