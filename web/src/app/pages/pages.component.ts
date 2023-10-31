import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { AitAuthService } from '../@core/api/ait.auth.service';
import { UserRole } from '@common/models/auth/user';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor(
    private authService: AitAuthService,
    private menuService: NbMenuService
  ) {

  }
  async ngOnInit() {
    const user = await this.authService.profile();
    // if (user.role == UserRole.report) {
    //   // stragey menu item hidden
    //   this.menu[0].home = false;
    //   this.menu[0].hidden = true;

    //   this.menu[1].home = true;
    //   this.menuService.navigateHome()
    // }
  }

}
