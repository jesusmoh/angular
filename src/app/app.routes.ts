import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/profile', pathMatch: 'full'},
    {path: 'profile', loadChildren: () => import('./features/profile/profile.routes')},
    { path: '**', redirectTo: '/profile' }];
