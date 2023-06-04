import { ChangeDetectorRef, Component, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTemplateMappingAddForm } from '../../shared/input-template.form';
import { EnumOption, EnumOptions } from 'src/app/shared/interfaces';
import { FieldService } from 'src/app/form/field/shared/field.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-mapping-add',
  templateUrl: './mapping-add.component.html'
})
export class MappingAddComponent implements OnInit {

  @Input() group!: FormGroup;
  @Input() control!: FormArray;

  private _fieldOptions: EnumOptions<string> = [];

  private _fieldService: FieldService;

  constructor(
    private injector: Injector,
    private cdr: ChangeDetectorRef
  ) {
    this._fieldService = injector.get(FieldService);
  }

  get array(): FormArray {
    return this.control;
  }

  get fieldOptions(): EnumOptions<string> {
    return this._fieldOptions;
  }

  toFormGroup(control: AbstractControl): FormGroup {
    return (control as FormGroup);
  }

  getFormControl(control: AbstractControl, key: string): FormControl {
    return this.toFormGroup(control).get(key) as FormControl;
  }

  addItem(): void {
    this.array.insert(this.array.length, new InputTemplateMappingAddForm());
  }

  clear(): void {
    this.array.clear();
    this.addItem();
    this.cdr.detectChanges();
  }

  removeItem(index?: number): void {
    if (typeof index === 'undefined') {
      index = this.array.length-1;
    }

    this.array.removeAt(index);
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this._fieldService
      .getAll()
      .pipe(finalize(()=>this.cdr.detectChanges()))
      .subscribe(response=>{
        this._fieldOptions = response.data.map(n=>({
          label: n.code,
          value: n.code
        }))
      });
  }

}
