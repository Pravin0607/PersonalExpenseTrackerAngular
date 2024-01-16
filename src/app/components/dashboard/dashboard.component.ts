import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user:string='unknown';
  sidebarVisible:boolean=false;
  
  constructor(private router:Router){}
  ngOnInit(): void {
  this.user=sessionStorage.getItem('email') as string;    
  }
logOut()
{
  sessionStorage.clear();
  this.router.navigate(['/login'])
}

}
