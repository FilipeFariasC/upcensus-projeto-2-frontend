import { Directive, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { FormAdd } from '../../form/form.model';
import { Observable, finalize, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseCrudService } from '../../service/base.service';
import AppRoute from '../../../approutes.enum';


@Directive()
export abstract class BaseViewComponent<M> implements OnInit {

  protected readonly activatedRoute: ActivatedRoute;
  protected readonly cdr: ChangeDetectorRef;
  protected readonly service: BaseCrudService<any,any>;
  protected readonly router: Router;
  protected _model!: M;

  constructor(protected injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.cdr = injector.get(ChangeDetectorRef);
    this.service = injector.get(BaseCrudService);
    this.router = injector.get(Router);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(()=>{
      this.fetchModel();
    });
  }

  get id(): number {
    return this.activatedRoute.snapshot.params['id'];
  }
  get model(): M {
    return this._model;
  }

  get editRoute(): string[] {
    return [AppRoute.EDIT_SUFFIX]
  }

  private fetchModel(): void {
    this.service.findById(this.id)
      .pipe(
        finalize(()=>{
          this.cdr.detectChanges();
        })
      )
      .subscribe(response=>{
        this._model = response.data;
        this.fetchData();
      })
  }
  protected fetchData(): void {

  }

  private navigateBackToList(): void {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
