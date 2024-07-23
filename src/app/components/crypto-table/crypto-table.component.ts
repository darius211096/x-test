import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface CryptoCurrency {
  name: string;
  price: number;
}

const ELEMENT_DATA: CryptoCurrency[] = [
  { name: 'Bitcoin', price: 40000 },
  { name: 'Ethereum', price: 2500 },
  { name: 'Ripple', price: 0.75 },
];

@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './crypto-table.component.html',
  styleUrl: './crypto-table.component.scss'
})
export class CryptoTableComponent {
  displayedColumns: string[] = ['name', 'price'];
  dataSource = ELEMENT_DATA;
}
