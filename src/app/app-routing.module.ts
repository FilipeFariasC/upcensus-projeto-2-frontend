import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from './approutes.enum';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationBarComponent } from './shared/component';

const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoute.HOME,
    pathMatch: 'full'
  },

  {
    path: '',
    component: NavigationBarComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children: [
      {
        path: AppRoute.FORM,
        loadChildren: () => import('./form/form.module').then(module => module.FormModule)
      },
      {
        path: AppRoute.MODULE,
        loadChildren: () => import('./module/module.module').then(module => module.ModuleModule)
      },
      {
        path: AppRoute.HOME,
        component: HomePageComponent,
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
  },
  {//isso fica no children de quando tiver logado
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
    },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
