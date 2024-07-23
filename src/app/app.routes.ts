import { Routes } from '@angular/router';
import { CryptoScreenerPageComponent } from '@pages';

export const routes: Routes = [
    { path: '', redirectTo: '/crypto-screener', pathMatch: 'full' },
    { path: 'crypto-screener', component: CryptoScreenerPageComponent },
];
