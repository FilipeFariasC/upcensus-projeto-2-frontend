import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from '../../../../environments/environment';
import { AnswerResponse, ModuleRequest, ModuleResponse } from './module.model';
import { Response } from 'src/app/shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ModuleService extends DomainService<ModuleRequest, ModuleResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/module/modules`;


  getAnswers (idModule: number): Observable<Response<AnswerResponse>> {
    return this.httpClient.get<Response<AnswerResponse>>(this.buildUrl(`${idModule}`, "answers"));
  }

}
