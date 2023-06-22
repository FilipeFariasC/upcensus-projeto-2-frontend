import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Response } from 'src/app/shared/interfaces';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from '../../../../environments/environment';
import { Page, Pageable } from './../../../shared/interfaces/pageable';
import { FileUploadFormData } from './module.form';
import { AnswerResponse, ModuleRequest, ModuleResponse, RecordMinResponse, RecordResponse } from './module.model';


@Injectable({
  providedIn: 'root'
})
export class ModuleService extends DomainService<ModuleRequest, ModuleResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/module/modules`;


  getRecords(idModule: number, pageable: Pageable): Observable<Response<Page<RecordMinResponse>>> {
    return this.httpClient.get<Response<Page<RecordMinResponse>>>(this.buildUrl(`${idModule}`, "answers"), {params: pageable});
  }
  getAnswer(idModule: number, idAnswer: number): Observable<Response<AnswerResponse>> {
    return this.httpClient.get<Response<AnswerResponse>>(this.buildUrl(`${idModule}`, "answers", `${idAnswer}`));
  }

  uploadFile(idModule: number, fileUploadFormData: FileUploadFormData): Observable<Response<void>> {
    return this.httpClient.post<Response<void>>(this.buildUrl(`${idModule}`, "upload"), fileUploadFormData)
      .pipe(
        shareReplay(1)
      );
  }

  migrate(idModule: number): Observable<Response<void>> {
    return this.httpClient.post<Response<void>>(this.buildUrl(`${idModule}`, "migrate"), null);
  }
}
