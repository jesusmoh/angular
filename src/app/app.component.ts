import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./features/profile/profile.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import { Component,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponseAPI } from './interfaces/app.interface';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToolbarComponent,ProfileComponent,MatDividerModule,MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'randomuser';
  data: IResponseAPI | undefined;
  constructor() {this.data = undefined; }

  httpClient = inject(HttpClient);

  onClickgetProfile() {
    this.httpClient.get('https://randomuser.me/api/')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        }, error: (err) => console.log(err)
      });
  }


}
