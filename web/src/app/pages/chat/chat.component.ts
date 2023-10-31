import { Component } from '@angular/core';
import { ReportService } from 'src/app/@core/api/report.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: any[];

  constructor(private reportService: ReportService) {
    this.messages = [];
  }

  async sendMessage(event: any) {
    // const files = !event.files ? [] : event.files.map((file) => {
    //   return {
    //     url: file.src,
    //     type: file.type,
    //     icon: 'file-text-outline',
    //   };
    // });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: 'text',
      user: {
        name: 'Me',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const msg = await this.reportService.chat(event.message)
    console.log('reply message', msg)
    const botReply = {
      text: msg.answer,
      date: new Date(),
      reply: false,
      user: {
        name: 'Bot',
        avatar: 'https://i.gifer.com/no.gif',
      },
    } //this.chatShowcaseService.reply(event.message);

    this.messages.push(botReply)
  }
}
