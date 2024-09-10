import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'report', component: ReportComponent },
            { path: 'calendar', component: CalendarComponent }
        ]
    }
    
];
