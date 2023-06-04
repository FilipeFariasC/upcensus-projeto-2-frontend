import { Component, Injector } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { EnumOptions } from 'src/app/shared/interfaces';
import { InputTemplateService } from '../../template/input/shared/input-template.service';
import { OutputTemplateService } from '../../template/output/shared/output-template.service';
import { ModuleAddForm } from '../shared/module.form';
import { ConfigurationService } from '../../configuration/shared/configuration.service';
import { finalize, forkJoin } from 'rxjs';

@Component({
  selector: 'app-module-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent extends BaseAddComponent<ModuleAddForm> {
  protected override _form = new ModuleAddForm();

  private _inputTemplatesOptions: EnumOptions<string> = [];
  private _outputTemplateOptions: EnumOptions<string> = [];
  private _configurationOptions: EnumOptions<string> = [];


  private _configurationService: ConfigurationService;
  private _inputTemplateService: InputTemplateService;
  private _outputTemplateService: OutputTemplateService;

  constructor(injector: Injector) {
    super(injector);
    this._configurationService = injector.get(ConfigurationService);
    this._inputTemplateService = injector.get(InputTemplateService);
    this._outputTemplateService = injector.get(OutputTemplateService);
  }

  override get registerTitle(): string {
    return 'Cadastro de Caracteristica';
  }
  override get editTitle(): string {
    return 'Edição de Caracteristica';
  }

  get inputTemplatesOptions(): EnumOptions<string> {
    return this._inputTemplatesOptions;
  }

  get outputTemplateOptions(): EnumOptions<string> {
    return this._outputTemplateOptions;
  }

  get configurationOptions(): EnumOptions<string> {
    return this._configurationOptions;
  }


  protected override fetchData(): void {

    forkJoin({
      configuration: this._configurationService.getAll(),
      inputTemplates: this._inputTemplateService.getAll(),
      outputTemplates: this._outputTemplateService.getAll()
    }).pipe(
      finalize(()=>{
        this.cdr.detectChanges();
      })
    ).subscribe(response=>{
      this._configurationOptions = response.configuration.data.map(n=>({
        value: n.code,
        label: n.code
      }));
      this._inputTemplatesOptions = response.inputTemplates.data.map(n=>({
        value: n.code,
        label: n.code
      }));
      this._outputTemplateOptions = response.outputTemplates.data.map(n=>({
        value: n.code,
        label: n.code
      }));
    });
  }

}
