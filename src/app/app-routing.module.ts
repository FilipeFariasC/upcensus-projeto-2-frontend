import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from './approutes.enum';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoute.HOME,
    pathMatch: 'full'
  },
  {
    path: AppRoute.HOME,
    component: HomePageComponent,
  },
  {
    path: '',
    children: [
      {
        path: AppRoute.FORM,
        loadChildren: () => import('./form/form.module').then(module => module.FormModule)
      },
      {
        path: AppRoute.MODULE,
        loadChildren: () => import('./module/module.module').then(module => module.ModuleModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: AppRoute.NOT_FOUND
  },
  {
    path: AppRoute.NOT_FOUND,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
