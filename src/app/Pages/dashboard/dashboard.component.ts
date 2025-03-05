import { Component } from '@angular/core';
import { DashboardModule } from './dashboard.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
