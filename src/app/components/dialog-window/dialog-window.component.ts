import { Component } from '@angular/core';
import { CryptoFiltersFormComponent } from '../crypto-filters-form/crypto-filters-form.component';

@Component({
  selector: 'app-dialog-window',
  standalone: true,
  imports: [CryptoFiltersFormComponent],
  templateUrl: './dialog-window.component.html',
  styleUrl: './dialog-window.component.scss'
})
export class DialogWindowComponent {
  
}
