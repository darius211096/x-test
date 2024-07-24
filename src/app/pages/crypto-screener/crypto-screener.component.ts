import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CryptoTableComponent, DialogWindowComponent } from '@components';
import { CryptoService, WebsocketConnectionService } from '@services';

@Component({
  selector: 'app-crypto-screener-page',
  standalone: true,
  imports: [
    CryptoTableComponent,
    MatButtonModule,
  ],
  templateUrl: './crypto-screener.component.html',
  styleUrl: './crypto-screener.component.scss'
})
export class CryptoScreenerPageComponent {
  constructor(
    public dialog: MatDialog,
    private websocketConnection: WebsocketConnectionService,
  ) {}

  public ngOnInit(): void {
    this.websocketConnection.connect();
  }

  public ngOnDestroy(): void {
    this.websocketConnection.disconnect();
  }

  public openFilterDialog(): void {
    this.dialog.open(DialogWindowComponent, {
      maxWidth: '500px',
    });
  }
}
