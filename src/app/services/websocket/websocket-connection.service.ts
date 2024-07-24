import { Injectable } from '@angular/core';
import { CryptoService } from '@services';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketConnectionService {
  private readonly wsUrl: string = 'wss://stream.binance.com:9443/ws/!ticker@arr';
  private socket$ = webSocket(this.wsUrl);

  constructor(
    private cryptoService: CryptoService
  ) {}

  public connect(): void {
    this.socket$.subscribe(
      {
        next: msg => this.cryptoService.updateData(msg),
        error: err => console.log(err),
        complete: () => console.log('ws connection closed')
      }
    );
  }

  public disconnect(): void {
    this.socket$.unsubscribe();
  }
}
