import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeeViewComponent } from "./components/list-employee-view/list-employee-view.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListEmployeeViewComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Webside';
}
