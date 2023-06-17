import { Injectable } from '@angular/core';
import { DomainService } from "src/app/shared/service/domain.service";
import { environment } from '../../../../environments/environment';
import { ConfigurationRequest, ConfigurationResponse } from './configuration.model';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends DomainService<ConfigurationRequest, ConfigurationResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/form/configurations`;
}
