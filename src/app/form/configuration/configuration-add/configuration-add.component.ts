import { AfterViewInit, Component, Injector } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { EnumOptions } from 'src/app/shared/interfaces';
import { FieldService } from '../../field/shared/field.service';
import { ConfigurationAddForm } from '../shared/configuration.form';

@Component({
  selector: 'app-configuration-add',
  templateUrl: './configuration-add.component.html',
  styleUrls: ['./configuration-add.component.scss']
})
export class ConfigurationAddComponent extends BaseAddComponent<ConfigurationAddForm> implements AfterViewInit {
  protected override _form = new ConfigurationAddForm();

  private _fieldService: FieldService;

  private _fieldOptions: EnumOptions<string> = [];
  private _identifierFieldOptions: EnumOptions<string> = [];

  constructor(injector: Injector) {
    super(injector);
    this._fieldService = injector.get(FieldService);
  }

  override get registerTitle(): string {
    return 'Cadastro de Configuração';
  }
  override get editTitle(): string {
    return 'Edição de Configuração';
  }

  get fieldOptions(): EnumOptions<String> {
    return this._fieldOptions;
  }

  get identifierFieldOptions(): EnumOptions<String> {
    return this._identifierFieldOptions;
  }


  ngAfterViewInit(): void {
    this.form.fields.valueChanges.subscribe(value=>{
      this._identifierFieldOptions = (value as string[])
        .map(n=>({
          value: n,
          label: n
        }));
      this.cdr.detectChanges();
    })
  }
  protected override fetchData(): void {
    (this._fieldService as FieldService)
      .getAll()
      .subscribe(response=>{
        this._fieldOptions = response.data.map(field=> ({
          value: field.code,
          label: field.code
        }));
        this.cdr.detectChanges();
      });
  }
}
