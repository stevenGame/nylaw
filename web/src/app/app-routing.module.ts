import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './auth-guard.service';

import { AuthCallbackModule } from './pages/auth.callback/auth.callback.module';
import { AuthCallbackComponent } from './pages/auth.callback/auth.callback.component';
import { FormsComponent } from './pages/nyislaw/forms/forms.component'
import { NyislawModule } from './pages/nyislaw/nyislaw.module';

const routes: Routes = [
  {
    path: 'pages',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'callback',
        component: AuthCallbackComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports:
    [
      RouterModule.forRoot(routes),
      AuthCallbackModule,
      NyislawModule,
      // DashboardModule
    ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
