import { Injectable } from '@angular/core';
import { DomainService } from "src/app/shared/service/domain.service";
import { MetadataRequest, MetadataResponse } from './metadata.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MetadataService extends DomainService<MetadataRequest, MetadataResponse>  {
  protected override _baseUrl: string = `${environment.baseUrl}/module/modules/metadata`;

  protected override buildUrl(...paths: string[]): string {
    console.log(paths);
    console.log('????');
    return super.buildUrl(...paths);
  }
}
