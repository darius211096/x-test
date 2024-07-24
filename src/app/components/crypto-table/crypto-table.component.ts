import { ScrollingModule } from '@angular/cdk/scrolling';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CryptoService } from '@services';

@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [
    MatTableModule, 
    AsyncPipe, 
    NgIf, 
    MatIconModule,
    ScrollingModule
  ],
  templateUrl: './crypto-table.component.html',
  styleUrl: './crypto-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTableComponent {
  displayedColumns: string[] = ['name', 'price'];

  constructor(
    public cryptoService: CryptoService
  ) {}

  public trackBySymbol(index: number, item: any): string {
    return item.s;
  }
}
