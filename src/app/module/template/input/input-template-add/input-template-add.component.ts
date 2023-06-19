import { Component, Injector } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { InputTemplateAddForm } from '../shared/input-template.form';
import { EnumOptions } from 'src/app/shared/interfaces';
import { FieldService } from 'src/app/form/field/shared/field.service';
import { finalize, forkJoin } from 'rxjs';
import { InputTemplateService } from '../shared/input-template.service';
import { Type } from '../shared/input-template.model';

@Component({
  selector: 'app-input-template-add',
  templateUrl: './input-template-add.component.html',
  styleUrls: ['./input-template-add.component.scss']
})
export class InputTemplateAddComponent extends BaseAddComponent<InputTemplateAddForm> {
  protected override _form = new InputTemplateAddForm();

  private _fieldOptions: EnumOptions<string> = [];
  private _typeOptions: EnumOptions<Type> = [];

  private _fieldService: FieldService;

  constructor(injector: Injector) {
    super(injector);
    this._fieldService = injector.get(FieldService);
  }

  override get registerTitle(): string {
    return 'Cadastro de Modelo de Entrada';
  }
  override get editTitle(): string {
    return 'Edição de Modelo de Entrada';
  }

  get fieldOptions(): EnumOptions<string> {
    return this._fieldOptions;
  }

  get typeOptions(): EnumOptions<Type> {
    return this._typeOptions;
  }

  protected override fetchData(): void {
    forkJoin({
      fields: this._fieldService.getAll(),
      types: (this.service as InputTemplateService).typeOptions()
    }).pipe(
      finalize(()=>{
        this.cdr.detectChanges();
      })
    ).subscribe(response =>{
      this._fieldOptions = response.fields.data.map(n=>({
        value: n.code,
        label: n.code
      }));
      this._typeOptions = response.types.data;
    })
  }

}
