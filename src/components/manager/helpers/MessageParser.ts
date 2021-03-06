import {CommandObserver} from './CommandObserver';
import {Commands} from '../commands';

export class MessageParser {
  helpCommandEvent: CommandObserver;
  productsCommandEvent: CommandObserver;
  defaultCommandEvent: CommandObserver;
  greetCommandEvent: CommandObserver;

  constructor() {
    this.helpCommandEvent = new CommandObserver(this);
    this.productsCommandEvent = new CommandObserver(this);
    this.greetCommandEvent = new CommandObserver(this);
    this.defaultCommandEvent = new CommandObserver(this);
  }

  parse = (message: string) => {
    switch (true) {
      case message.includes(Commands.HELP):
        this.helpCommandEvent.notify();
        break;

      case message.includes(Commands.PRODUCTS):
        this.productsCommandEvent.notify();
        break;

      case message.includes(Commands.GREET):
        this.greetCommandEvent.notify();
        break;

      default:
        this.defaultCommandEvent.notify();
        break;
    }
  };
}
