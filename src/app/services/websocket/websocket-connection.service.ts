import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketConnectionService {
  private websocket!: WebSocket;
  private readonly url: string = 'wss://stream.binance.com:9443/ws/!ticker@arr';

  constructor() {
    this.connect();
  }

  private connect(): void {
    this.websocket = new WebSocket(this.url);

    this.websocket.onopen = () => {
      console.log('WebSocket connection opened');
      this.subscribeToStream(['btcusdt@aggTrade', 'btcusdt@depth']);
    };

    this.websocket.onmessage = (event) => {

    };

    this.websocket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    this.websocket.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  }

  private subscribeToStream(streams: string[]): void {
    const request = {
      method: 'SUBSCRIBE',
      params: streams,
      id: 1
    };
    this.websocket.send(JSON.stringify(request));
  }

  public sendMessage(message: string): void {
    if (this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(message);
    } else {
      console.error('WebSocket is not open. Ready state is:', this.websocket.readyState);
    }
  }

  public closeConnection(): void {
    if (this.websocket) {
      this.websocket.close();
    }
  }
}
