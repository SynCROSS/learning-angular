import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  addMessage = (message: string) => {
    this.messages = [...this.messages, message];
  };

  clearAllMessages = (): void => {
    this.messages = [];
  };
  constructor() {}
}
