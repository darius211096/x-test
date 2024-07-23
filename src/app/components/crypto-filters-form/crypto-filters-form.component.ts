import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crypto-filters-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './crypto-filters-form.component.html',
  styleUrl: './crypto-filters-form.component.scss'
})
export class CryptoFiltersFormComponent {
  public filterForm: FormGroup = this.fb.group({
    minTradeVolume: ['', [Validators.required, Validators.min(0)]],
    maxTradeVolume: ['', [Validators.required, Validators.min(0)]],
    minPriceChange: ['', [Validators.required, Validators.min(-100), Validators.max(100)]],
    maxPriceChange: ['', [Validators.required, Validators.min(-100), Validators.max(100)]],
    minPrice: ['', [Validators.required, Validators.min(0)]],
    maxPrice: ['', [Validators.required, Validators.min(0)]]
  });;

  constructor(private fb: FormBuilder) {}

  public onSubmit(): void {
    if (this.filterForm.valid) {
      console.log(this.filterForm.value);
      // Apply the filters to the data
    }
  }
}
