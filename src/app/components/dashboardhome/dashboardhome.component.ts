import { Component, OnInit } from '@angular/core';
import { Colors } from 'chart.js';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrl: './dashboardhome.component.css'
})
export class DashboardhomeComponent implements OnInit {
  user:string='unknown';

  totalToday:number=1234
  totalMonth:number=12345;
  totalYear:number=1234567;
  totalTill:number=12345678;

  data:any;
  options:any;
  ngOnInit(): void {
    this.user=sessionStorage.getItem('email') as string;


    this.data={
        labels: ['A', 'B', 'C','D'],
        datasets: [
            {
                data: [540, 325, 702,500],
            }
        ]
    };
    this.options={
      plugins: {
          legend: {
              labels: {
                  usePointStyle: true,
                  color: 'textColor'
              }
          }
      }
  };
  }
}
