import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ChatComponent } from './chat/chat.component';
import { LamapComponent } from './lamap/lamap.component';
import { LegalComponent } from './legal/legal.component';
import { NyislawComponent } from './nyislaw/nyislaw.component';
// import { ECommerceComponent } from './e-commerce/e-commerce.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
      // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
      path: 'reports',
      component: ReportsComponent
      // loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
    },
    {
      path: 'chat',
      component: ChatComponent
      // loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
    },
    {
      path: 'lamap',
      component: LamapComponent
    },
    {
      path: 'legal',
      component: LegalComponent
    }, {
      path: 'nyislaw',
      component: NyislawComponent
    }
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },
    // {
    //   path: 'forms',
    //   loadChildren: () => import('./forms/forms.module')
    //     .then(m => m.FormsModule),
    // },
    // {
    //   path: 'ui-features',
    //   loadChildren: () => import('./ui-features/ui-features.module')
    //     .then(m => m.UiFeaturesModule),
    // },
    // {
    //   path: 'modal-overlays',
    //   loadChildren: () => import('./modal-overlays/modal-overlays.module')
    //     .then(m => m.ModalOverlaysModule),
    // },
    // {
    //   path: 'extra-components',
    //   loadChildren: () => import('./extra-components/extra-components.module')
    //     .then(m => m.ExtraComponentsModule),
    // },
    // {
    //   path: 'maps',
    //   loadChildren: () => import('./maps/maps.module')
    //     .then(m => m.MapsModule),
    // },
    // {
    //   path: 'charts',
    //   loadChildren: () => import('./charts/charts.module')
    //     .then(m => m.ChartsModule),
    // },
    // {
    //   path: 'editors',
    //   loadChildren: () => import('./editors/editors.module')
    //     .then(m => m.EditorsModule),
    // },
    // {
    //   path: 'tables',
    //   loadChildren: () => import('./tables/tables.module')
    //     .then(m => m.TablesModule),
    // },
    // {
    //   path: 'miscellaneous',
    //   loadChildren: () => import('./miscellaneous/miscellaneous.module')
    //     .then(m => m.MiscellaneousModule),
    // },
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
