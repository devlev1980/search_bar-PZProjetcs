import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {IUser} from '../models/user';
import {users} from '../../assets/mock/users';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<IUser> = [];
  public name: string = '';

  constructor() {
    this.users = users;


  }

  getUsers(): Observable<IUser[]> {
    return from([this.users]);
  }




}
