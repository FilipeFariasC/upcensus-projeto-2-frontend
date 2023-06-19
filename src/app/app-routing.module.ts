import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from './approutes.enum';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationBarComponent } from './shared/component';


import { RegisterComponent } from './register/register.component';

import { ProfileComponent } from './profile/profile.component';
import { AuthorizedGuard } from './core/auth/_guard/authorized/authorized.guard';
import { UnauthorizedGuard } from './core/auth/_guard/unauthorized/unauthorized.guard';
import { LoginComponent } from './login/login-view/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoute.HOME,
    pathMatch: 'full'
  },

  {
    path: '',
    component: NavigationBarComponent,
    canActivate:[AuthorizedGuard],
    canActivateChild:[AuthorizedGuard],
    children: [
      {
        path: AppRoute.HOME,
        component: HomePageComponent,
      },
      {
        path: AppRoute.FORM,
        loadChildren: () => import('./form/form.module').then(module => module.FormModule)
      },
      {
        path: AppRoute.MODULE,
        loadChildren: () => import('./module/module.module').then(module => module.ModuleModule)
      }
    ]
  },
  {
    path: '',
    canActivate:[UnauthorizedGuard],
    canActivateChild:[UnauthorizedGuard],
    children: [
      {
        path: AppRoute.LOGIN,
        component: LoginComponent
      },
      {
        path: AppRoute.REGISTER,
        component: RegisterComponent
      }
    ]
  }
  ,
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
