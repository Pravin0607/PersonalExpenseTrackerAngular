import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit{
tabs:{title:string,content:string}[]=[]
constructor(){}

ngOnInit(): void {
    this.tabs=[
      {
        title:'Daywise',
        content:'daywise report'
      },
      {
        title:'Monthwise',
        content:'Monthwise report'
      },
      {
        title:'Yearwise',
        content:'Yearwise report'
      },
      {
        title:'Between Dates',
        content:'Between Dates report'
      }
    ]
}


}
