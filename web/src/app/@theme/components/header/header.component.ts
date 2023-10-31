import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    NbMenuService,
    NbSidebarService,
    NbThemeService
} from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AitAuthService } from 'src/app/@core/api/ait.auth.service';
import { IUser, UserRole } from '@common/models/auth/user';

type HeaderUser = IUser & {
    picture: string
}
@Component({
    selector: 'ngx-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();
    userPictureOnly: boolean = false;
    user: HeaderUser = {
        id: 0,
        name: '',
        email: '',
        createBy: 0,
        createdUser: '',
        createdAt: new Date(),
        role: UserRole.unknow,
        avatar: '',
        picture: ''
    };

    themes = [
        {
            value: 'default',
            name: 'Light',
        },
        {
            value: 'dark',
            name: 'Dark',
        },
        {
            value: 'cosmic',
            name: 'Cosmic',
        },
        {
            value: 'corporate',
            name: 'Corporate',
        },
    ];

    currentTheme = 'default';

    userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

    constructor(
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        private userService: UserData,
        private layoutService: LayoutService,
        private authService: AitAuthService
    ) {
    }

    ngOnInit() {

        this.userService.getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe((users: any) => {
                this.user = users.steven
            });
        
        Object.assign(this.user, this.authService.user);

        this.menuService.onItemClick()
            .pipe(
                filter(({ tag }) => tag === 'user-context-menu'),
                map(({ item: { title } }) => title),
            )
            .subscribe(title => {
                if (title == 'Log out') {
                    this.authService.logOut();
                }
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    changeTheme(themeName: string) {
        this.themeService.changeTheme(themeName);
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();

        return false;
    }

    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}