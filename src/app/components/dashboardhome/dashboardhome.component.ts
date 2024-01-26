import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrl: './dashboardhome.component.css'
})
export class DashboardhomeComponent implements OnInit {
  user:string='unknown';
  ngOnInit(): void {
    this.user=sessionStorage.getItem('email') as string;
  }
}
