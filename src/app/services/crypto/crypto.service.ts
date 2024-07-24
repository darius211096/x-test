import { Injectable } from '@angular/core';
import { FiltersService } from '@services';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  public data$ = this.dataSubject.asObservable();

  constructor(
    private filtersService: FiltersService,
  ) { }

  public updateData(newData: any): void {
    this.dataSubject.next(newData);
  }

  public getFilteredData(): Observable<any[]> {
    return this.data$.pipe(
      map(tickers => {
        const criteria = this.filtersService.getFiltersState();
        if (!criteria.isSet) return tickers;

        return tickers.filter(symbol => {
          const tradeVolume = parseFloat(symbol.q);
          const priceChangePercentage = parseFloat(symbol.P);
          const lowPrice = parseFloat(symbol.l);
          const highPrice = parseFloat(symbol.h);
          const priceRange = highPrice - lowPrice;

          return (
            tradeVolume >= criteria.minTradeVolume &&
            tradeVolume <= criteria.maxTradeVolume &&
            priceChangePercentage >= criteria.minPriceChange &&
            priceChangePercentage <= criteria.maxPriceChange &&
            priceRange >= criteria.minPrice &&
            priceRange <= criteria.maxPrice
          );
        });
      }),
      
    );
  }
}
