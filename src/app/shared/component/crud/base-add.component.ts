import { Directive, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { FormAdd } from '../../form/form.model';
import { Observable, finalize, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseCrudService } from '../../service/base.service';
import AppRoute from '../../../approutes.enum';

enum WriteMode {
  add = 'add',
  edit = 'edit'
}

@Directive()
export abstract class BaseAddComponent<F extends FormAdd<any,any>> implements OnInit {

  protected mode: WriteMode = WriteMode.add;
  protected abstract _form: F;
  protected readonly activatedRoute: ActivatedRoute;
  protected readonly cdr: ChangeDetectorRef;
  protected readonly service: BaseCrudService<any,any>;
  protected readonly router: Router;
  protected id: number = -1;
  protected _title: string = '';

  constructor(protected injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.cdr = injector.get(ChangeDetectorRef);
    this.service = injector.get(BaseCrudService);
    this.router = injector.get(Router);
  }

  ngOnInit(): void {
    const route = this.activatedRoute.snapshot.routeConfig?.path;

    this.fetchData();
    if (route === AppRoute.EDIT) {
      this.mode = WriteMode.edit;
      this.id = this.activatedRoute.snapshot.params['id'];
      this.fetchModel();
      this._title = this.editTitle;
    } else {
      this.mode = WriteMode.add;
      this._title = this.registerTitle;
    }
  }
  get form(): F {
    return this._form;
  }
  get subtitle(): string {
    return '';
  }
  get add(): boolean {
    return this.mode === WriteMode.add;
  }
  get edit(): boolean {
    return this.mode === WriteMode.edit;
  }

  get listRoute(): string[] {
    return this.add ? ['..'] : ['../..'];
  }

  abstract get registerTitle(): string;
  abstract get editTitle(): string;
  get title(): string {
    return this._title;
  }

  protected fetchData(): void { }
  save(): void {
    if (this._form.invalid) return ;

    const model = this._form.toModel;
    const save = this.add ?
      this.service.register(model)
      :
      this.service.update(this.id, model);

    save.pipe(
      finalize(()=>{
        this.cdr.detectChanges();
      })
    ).subscribe(()=>{
      this.navigateBackToList();
    })
  }

  private fetchModel(): void {
    this.service.findById(this.id)
      .pipe(
        finalize(()=>{
          this.cdr.detectChanges();
        })
      )
      .subscribe(response=>{
        this._form.fromModel(response.data);
      })
  }

  private navigateBackToList(): void {
    this.router.navigate(this.listRoute, {relativeTo: this.activatedRoute});
  }
}
