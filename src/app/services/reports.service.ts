import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  baseUrl="http://localhost:8001/api/reports/";
  constructor(private http:HttpClient) { }

  getDayWiseReport(date:any)
  {
    return this.http.post(this.baseUrl+'day/',{date},{headers:{'token':`${sessionStorage.getItem('token')}`}});
  }

  getMonthWiseReport(month:any){
    return this.http.post(this.baseUrl+'month/',{month},{headers:{'token':`${sessionStorage.getItem('token')}`}});
  }

  getYearWiseReport(year:any){
    return this.http.post(this.baseUrl+'year/',{year},{headers:{'token':`${sessionStorage.getItem('token')}`}});
  }

  structureData(response:{categoryReport:{}[],expenses:{}[]})
  {

    const {categoryReport,expenses}=response;
    let labels:string[]=[];
    let dataset:number[]=[];
  if(categoryReport && expenses)
  {
    categoryReport.forEach((element:any) => {
      labels.push(element['category']);
      dataset.push(element['totalAmount']);
    });
  }
    
    // console.log("labels",labels);
    // console.log("dataset",dataset);
    // console.log("expenses",expenses);

    return {labels,dataset,expenses};
    
  }

}
