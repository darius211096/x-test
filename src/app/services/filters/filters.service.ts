import { Injectable } from '@angular/core';

interface CryptoFilters {
  maxPrice: number;
  maxPriceChange: number;
  maxTradeVolume: number;
  minPrice: number;
  minPriceChange: number;
  minTradeVolume: number;
  isSet: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private filtersState = {
    maxPrice: 0,
    maxPriceChange: 0,
    maxTradeVolume: 0,
    minPrice: 0,
    minPriceChange: 0,
    minTradeVolume: 0,
    isSet: false
  };

  public updateFiltersState(newState: CryptoFilters): void {
    this.filtersState = {...newState, isSet: true};
  }

  public getFiltersState(): CryptoFilters {
    return this.filtersState;
  }
}
