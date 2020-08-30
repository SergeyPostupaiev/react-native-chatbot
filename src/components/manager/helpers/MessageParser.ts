import {CommandObserver} from './CommandObserver';

export class MessageParser {
  helpCommandEvent: CommandObserver;
  productsCommandEvent: CommandObserver;
  defaultCommandEvent: CommandObserver;

  constructor() {
    this.helpCommandEvent = new CommandObserver(this);
    this.productsCommandEvent = new CommandObserver(this);
    this.defaultCommandEvent = new CommandObserver(this);
  }

  parse = (message: string) => {
    switch (true) {
      case message.includes('help'):
        this.helpCommandEvent.notify();
        break;

      case message.includes('products'):
        this.productsCommandEvent.notify();
        break;

      default:
        this.defaultCommandEvent.notify();
        break;
    }
  };
}
