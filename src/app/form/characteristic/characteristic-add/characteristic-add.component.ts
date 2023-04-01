import { Component } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { CharacteristicAddForm } from '../shared/characteristic.form';
import { Observable } from 'rxjs';
import { CharacteristicService } from '../shared/characteristic.service';
import { EnumOption, EnumOptions } from '../../../shared/interfaces/enum-option';
import { Attribute } from '../shared/characteristic.model';

@Component({
  selector: 'app-characteristic-add',
  templateUrl: './characteristic-add.component.html',
  styleUrls: ['./characteristic-add.component.scss']
})
export class CharacteristicAddComponent extends BaseAddComponent<CharacteristicAddForm> {
  protected override _form = new CharacteristicAddForm();
  private _attributeOptions: EnumOptions<Attribute> = [];

  override get registerTitle(): string {
    return 'Cadastro de Caracteristica';
  }
  override get editTitle(): string {
    return 'Edição de Caracteristica';
  }

  get attributeOptions(): EnumOptions<Attribute> {
    return this._attributeOptions;
  }

  protected override fetchData(): void {
    (this.service as CharacteristicService)
      .attributeOptions()
      .subscribe(response=>{
        this._attributeOptions = response.data;
        this.cdr.detectChanges();
      })

  }
}
