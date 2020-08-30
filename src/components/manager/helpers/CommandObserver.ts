interface Observer {
  subscribe(handler: (data: any) => void): void;
  unsubscribe(handler: (data: any) => void): void;
  notify(data?: any): void;
}

export class CommandObserver implements Observer {
  sender: any;
  observers: ((data: any) => void)[];

  constructor(sender: any) {
    this.sender = sender;

    this.observers = [];
  }

  subscribe(handler: (data: any) => void) {
    this.observers.push(handler);
  }

  unsubscribe(handler: (data: any) => void) {
    this.observers.splice(this.observers.indexOf(handler), 1);
  }

  notify(data?: any) {
    this.observers.forEach((handler: (data: any) => void) => {
      handler(data);
    });
  }
}
