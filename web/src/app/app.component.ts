import { Component } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { LOCAL_STORAGE } from './app.config';
import { AitAuthService } from './@core/api/ait.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ai-trade';
  constructor(private authService: NbAuthService, private aitAuth: AitAuthService) {
    // this.authService.onTokenChange()
    //   // TODO fix anyscript here
    //   .subscribe((payload: any) => {
    //     this.aitAuth.setToken(payload.token);
    //     this.aitAuth.profile()
    //   })
  }
}
