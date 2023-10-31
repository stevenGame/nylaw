import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs';
import { AitAuthService } from './@core/api/ait.auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router, private aitAuth: AitAuthService) {
    }

    canActivate() {
        const logined = this.aitAuth.isAuthenticated()
        if (!logined) {
            this.router.navigateByUrl('auth')
        }
        return logined
    }
}