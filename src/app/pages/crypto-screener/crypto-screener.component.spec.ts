import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoScreenerPageComponent } from './crypto-screener.component';

describe('CryptoScreenerPageComponent', () => {
  let component: CryptoScreenerPageComponent;
  let fixture: ComponentFixture<CryptoScreenerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoScreenerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoScreenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
