import { Routes } from '@angular/router';

const profileRoutes:Routes = [
    {
        path: '',
        loadComponent: () => import('./profile.component').then(m => m.ProfileComponent),
    }
];



export default profileRoutes;