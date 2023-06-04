import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseViewComponent } from 'src/app/shared/component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { AnswerResponse, ModuleResponse } from '../../shared/module.model';
import { ModuleService } from '../../shared/module.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent extends BaseViewComponent<ModuleResponse> {

  private _answers: AnswerResponse = {};

  get answers(): AnswerResponse {
    return this._answers;
  }

  get hasAnswers(): boolean {
    return Object.keys(this.answers).length > 0;
  }

  protected override fetchData() {
    (this.service as ModuleService)
      .getAnswers(this.model.id)
      .pipe(finalize(()=>this.cdr.detectChanges()))
      .subscribe(response=>{
        this._answers = response.data;
      })
  }
}
