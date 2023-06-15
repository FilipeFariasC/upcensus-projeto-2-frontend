import { Page } from './../../../shared/interfaces/pageable';
import { Injectable } from '@angular/core';
import { Observable, share, shareReplay, tap } from 'rxjs';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from '../../../../environments/environment';
import { AnswerResponse, FileUploadRequest, ModuleRequest, ModuleResponse, RecordResponse } from './module.model';
import { Response } from 'src/app/shared/interfaces';
import { FileUploadFormData, ModuleFileUploadForm } from './module.form';


@Injectable({
  providedIn: 'root'
})
export class ModuleService extends DomainService<ModuleRequest, ModuleResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/module/modules`;


  getAnswers (idModule: number): Observable<Response<Page<RecordResponse>>> {
    return this.httpClient.get<Response<Page<RecordResponse>>>(this.buildUrl(`${idModule}`, "answers"));
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
