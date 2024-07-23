import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoFiltersFormComponent } from './crypto-filters-form.component';

describe('CryptoFiltersFormComponent', () => {
  let component: CryptoFiltersFormComponent;
  let fixture: ComponentFixture<CryptoFiltersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoFiltersFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoFiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
