import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCl92XnUD-cWU0iF4LesspR43mmLVLfdfU',
    authDomain: 'textchat-166.firebaseapp.com',
    databaseURL: 'https://textchat-166.firebaseio.com',
    projectId: 'textchat-166',
    storageBucket: '',
    messagingSenderId: '924499428604'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
