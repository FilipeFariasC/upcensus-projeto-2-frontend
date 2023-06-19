import { Component, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseViewComponent } from 'src/app/shared/component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { AnswerResponse, ModuleResponse, RecordResponse } from '../../shared/module.model';
import { ModuleService } from '../../shared/module.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import AppRoute from 'src/app/approutes.enum';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent extends BaseViewComponent<ModuleResponse> {

  private _records: RecordResponse[] = [];

  get records(): RecordResponse[] {
    return this._records;
  }

  get hasAnswers(): boolean {
    return Object.keys(this.records).length > 0;
  }

  fieldViewRoute(idField: number): string[] {
    return [this.buildUrl(true, AppRoute.FIELD_ABSOLUTE, ""+idField)];
  }

  answerViewRoute(idAnswer: number): string[] {
    return [this.buildUrl(true, AppRoute.ANSWER_ABSOLUTE, ""+idAnswer)];
  }

  protected override fetchData() {
    (this.service as ModuleService)
      .getAnswers(this.model.id)
      .pipe(finalize(()=>this.cdr.detectChanges()))
      .subscribe(response=>{
        if (!response.data) {
          this.router.navigate(['../'], { relativeTo: this.activatedRoute.parent});
        }
        this._records = response.data.content;
      })
  }


}
