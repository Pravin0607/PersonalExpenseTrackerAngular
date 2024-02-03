import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  Cid:number=0;
  visible1:boolean=false;
  visible2:boolean=false;
  categoryForm:FormGroup=new FormGroup({});

  categories:{id:number,category:string}[]=[];

  public constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.categoryForm=this.fb.group({});      
    this.categories=[{id:1,category:'Food'},{id:2,category:'Transport'}];
  }
  addCategory(){}

  showDialog1(id:number)
  {
    this.Cid=id;
    this.visible1=true;
  }
  showDialog2(id:number)
  {
    this.Cid=id;
    this.visible2=true;
  }
  closeDialog1()
  {
    this.visible1=false;
  }
  closeDialog2()
  {
    this.visible2=false;
  }
}

