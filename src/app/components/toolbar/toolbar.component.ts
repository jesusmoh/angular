import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
<mat-toolbar color="primary" align="center">
  <a mat-raised-button (click)="emitClick()"><mat-icon>account_circle</mat-icon><span>Get a profile</span></a>
</mat-toolbar>
  `,
  styles: ``
})
export class ToolbarComponent {

  onGetProfileEvent = output<void>();

  emitClick(): void {
    this.onGetProfileEvent.emit();
  }

}