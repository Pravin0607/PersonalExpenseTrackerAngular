import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

type Expense={amount:number,desc:string,date:string,category:string};
@Component({
  selector: "app-expense",
  templateUrl: "./expense.component.html",
  styleUrl: "./expense.component.css",
})
export class ExpenseComponent implements OnInit {
  visible1:boolean=false;
  visible2:boolean=false;
  Eid:number=0;

  value1: number = 0;
  maxDate:Date=new Date();
  categories:{name:string}[]|undefined;
  expenseform :FormGroup=new FormGroup({});
  expenses:Expense[]=[];

  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.expenseform = this.formbuilder.group({
      amount: [, [Validators.required]],
      desc: ['', []],
      date: [, [Validators.required]],
      selectedCategory: ['', [Validators.required]]
    });

    this.maxDate=new Date();
    this.categories= [
      { name: 'Food'},
      { name: 'Travel'}
  ];

  this.expenses=[{amount:200,desc:'paid for food',category:'foood',date:'01-01-2024'}]

  }

  addExpense() {}

  changeEid(id:number):void{
    this.Eid=id;
  }
  
  showDialog1(id:number) {
    this.Eid=id;
    this.visible1 = true;
}

closeDialog1() {
    this.visible1 = false;
}

showDialog2(id:number) {
  this.Eid=id;
  this.visible2 = true;
}

closeDialog2() {
  this.visible2 = false;
}
}
