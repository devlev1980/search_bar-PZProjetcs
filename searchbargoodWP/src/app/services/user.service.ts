import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {IUser} from '../models/user';
import {users} from '../../assets/mock/users';
import {sp} from '@pnp/sp';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<IUser> = [];
  public name: string = '';

  constructor() {
    this.users = users;
    console.log(sp.web.siteUsers);


  }

  getUsers(): Observable<IUser[]> {
    return from([this.users]);
  }




}
