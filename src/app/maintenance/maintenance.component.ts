import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  constructor(private router: Router) {}



  goToGestionEvaluation() {
    this.router.navigate(['/evaluation']);
  }
}
