import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import Amplify, {Interactions } from 'aws-amplify';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';


Amplify.configure({
  
    Auth: {
  
      identityPoolId: 'us-west-2:a500b391-87da-4392-b3c9-cb8c68ee62ff',
  
      region: 'us-west-2'
  
    },
  
    Interactions: {
  
      bots: {
  
        "guatemalabot_dev": {
  
          "name": "guatemalabot_dev",
  
          "alias": "$LATEST",
  
          "region": "us-west-2",
  
        },
  
      }
  
    }
  
  });


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
