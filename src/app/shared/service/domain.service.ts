import { Injectable } from '@angular/core';
import { DomainModel } from '../interfaces/response';
import { BaseCrudService } from './base.service';
;



@Injectable()
export abstract class DomainService<Request, Model extends DomainModel> extends BaseCrudService<Request, Model> { }
