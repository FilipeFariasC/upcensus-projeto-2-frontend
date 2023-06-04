import { Component, Injector } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { EnumOptions, RequiredOptions, requiredEnumOptions, EnumOption } from '../../../shared/interfaces/enum-option';
import { FieldAddForm } from '../shared/field.form';
import { Type } from '../shared/field.model';
import { FieldService } from '../shared/field.service';
import { CharacteristicResponse } from '../../characteristic/shared/characteristic.model';
import { CharacteristicService } from '../../characteristic/shared/characteristic.service';

@Component({
  selector: 'app-field-add',
  templateUrl: './field-add.component.html',
  styleUrls: ['./field-add.component.scss']
})
export class FieldAddComponent extends BaseAddComponent<FieldAddForm> {
  protected override _form = new FieldAddForm();
  private _characteristicService: CharacteristicService;

  private _typeOptions: EnumOptions<Type> = [];
  private _characteristicOptions: EnumOptions<number> = [];

  constructor(injector: Injector) {
    super(injector);
    this._characteristicService = injector.get(CharacteristicService);
  }


  override get registerTitle(): string {
    return 'Cadastro de Campo';
  }
  override get editTitle(): string {
    return 'Edição de Campo';
  }

  get typeOptions(): EnumOptions<Type> {
    return this._typeOptions;
  }

  get requiredOptions(): RequiredOptions {
    return requiredEnumOptions;
  }

  get characteristicOptions(): EnumOptions<number> {
    return this._characteristicOptions;
  }

  protected override fetchData(): void {
    (this.service as FieldService)
      .typeOptions()
      .subscribe(response=>{
        this._typeOptions = response.data;
        this.cdr.detectChanges();
      });
    this._characteristicService
      .getAll()
      .subscribe(response=>{
        this._characteristicOptions = response.data.map(characteristic => ({
          value: characteristic.id,
          label: `${characteristic.attribute} - ${characteristic.value}`
        }));
      });
  }
}
