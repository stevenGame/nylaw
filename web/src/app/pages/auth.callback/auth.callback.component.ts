import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AitAuthService } from 'src/app/@core/api/ait.auth.service';
import { LOCAL_STORAGE } from 'src/app/app.config';

@Component({
  selector: 'app-auth.callback',
  templateUrl: './auth.callback.component.html',
  styleUrls: ['./auth.callback.component.scss']
})
export class AuthCallbackComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router, private authService: AitAuthService) {

  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token']
      if (token) {
        this.authService.setToken(token)
        this.router.navigateByUrl('/pages/dashboard');
      }else {
        this.router.navigateByUrl('/auth');
      }

    })
  }

}
