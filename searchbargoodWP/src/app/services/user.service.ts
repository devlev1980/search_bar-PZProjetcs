import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {IUser} from '../models/user';
import {users} from '../../assets/mock/users';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ODataParserBase, sp} from 'sp-pnp-js';
import {RecursiveTemplateAstVisitor} from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<IUser> = [];
  public name: string = '';
  url: string = 'https://projects1.sharepoint.com/sites/Yevgeny/_api/SP.UserProfiles.PeopleManager/GetMyProperties';

  constructor(private http: HttpClient) {
    this.users = users;
  }

  getUsers() {
    return this.http.get(this.url);
  }


}
