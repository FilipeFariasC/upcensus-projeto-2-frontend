import { Injectable } from '@angular/core';
import { DomainService } from "src/app/shared/service/domain.service";
import { OutputTemplateRequest, OutputTemplateResponse } from './output-template.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OutputTemplateService extends DomainService<OutputTemplateRequest, OutputTemplateResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/module/templates/output`;
}
