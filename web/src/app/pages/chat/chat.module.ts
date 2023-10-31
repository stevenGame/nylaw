import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { ApiModule } from 'src/app/@core/api/aip.moudle';
import { NbCardModule, NbChatModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApiModule,
    NbCardModule,
    NbChatModule,
  ]
})
export class ChatModule { }
