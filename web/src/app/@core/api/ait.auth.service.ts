import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser, UserRole } from '@common/models/auth/user'
import { LOCAL_STORAGE } from "../../app.config";
import { Router } from "@angular/router";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AitAuthService {
    baseUrl = '/api/auth'
    user: IUser = {
        id: 0,
        name: '',
        email: '',
        createBy: 0,
        createdUser: '',
        createdAt: new Date(),
        role: UserRole.unknow,
        avatar: '',
    }

    constructor(private http: HttpClient, private router: Router) {

    }

    async profile() {
        const user = await firstValueFrom(this.http.get<IUser>(`${this.baseUrl}/profile`))
        this.user = user;
        return user;
    }

    logOut() {
        localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN)
        localStorage.removeItem('auth_app_token')
        this.router.navigate(['/auth'])
    }
    setToken(token: string) {
        localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token)
    }

    isAuthenticated(): boolean {
        // TODO: check token validate
        const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
        if (token == null || token == '') return false;
        return true;
    }



    navigateHome() {
        if (this.user.role == UserRole.report) {
            this.router.navigateByUrl(`/pages/reports`)
        } else {
            this.router.navigateByUrl(`/pages/dashboard?role`)
        }
    }
}