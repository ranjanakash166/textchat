import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.getChatData();
  }
  getChatData() {
    this.messages = this.db.list('chat_messages');

  }
  newMessage(message) {
    this.messages.push(message);
  }

}
