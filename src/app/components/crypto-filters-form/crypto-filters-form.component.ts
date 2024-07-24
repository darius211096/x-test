import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FiltersService } from '@services';
import { P } from '@angular/cdk/keycodes';

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
  styleUrl: './crypto-filters-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoFiltersFormComponent {
  public filterForm: FormGroup = this.fb.group({
    minTradeVolume: ['', [Validators.required, Validators.min(0)]],
    maxTradeVolume: ['', [Validators.required, Validators.min(0)]],
    minPriceChange: ['', [Validators.required, Validators.min(-100), Validators.max(100)]],
    maxPriceChange: ['', [Validators.required, Validators.min(-100), Validators.max(100)]],
    minPrice: ['', [Validators.required, Validators.min(0)]],
    maxPrice: ['', [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder, private filtersService: FiltersService) {}

  public ngOnInit(): void {
    this.checkFiltersState();
  }

  public onSubmit(): void {
    if (this.filterForm.valid) {
      this.filtersService.updateFiltersState(this.filterForm.value);
    }
  }

  private checkFiltersState(): void {
    const filtersState = this.filtersService.getFiltersState();
    if (filtersState.isSet) {
      this.filterForm.patchValue(this.filtersService.getFiltersState());
    }
  }
}
