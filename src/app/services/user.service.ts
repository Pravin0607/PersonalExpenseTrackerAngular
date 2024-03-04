import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data:Partial<User>={};
  constructor() 
  { 
    this.data={id:101,firstName:'pravin',lastName:'Adhav',email:sessionStorage.getItem('email') as string,password:''};
  };
}
