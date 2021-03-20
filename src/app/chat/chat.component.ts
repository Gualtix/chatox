import { Component, OnInit } from '@angular/core';

import { Interactions } from 'aws-amplify';

import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  title = 'aws-demo-chatbot';

  conversation: string = '';

  message: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  async startChat() {

    // Provide a bot name and user input

    this.conversation = this.conversation + "\nYou::" + this.message;

    var response = await Interactions.send("guatemalabot_dev", this.message.toString());

    //Log chatbot response

    console.log(response);

    this.message = '';

    if(response && response.message){

      this.conversation = this.conversation + "\nBot::" + response.message

    }

    if(response && !response.message){

      this.conversation = this.conversation + "\nBot::" + "Your Hotel Room Booking is complete."

    }

  }

  /*
  constructor() { }

  ngOnInit(): void {
  }*/

}
