import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../models/user';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: IUser[],searchTerm: string): any {
   if(!users || !searchTerm){
     return  users;
   }
    return users.filter((user)=>{
      return user.name.indexOf(searchTerm) > -1;
    })
  }

}
