import {Injectable} from '@angular/core';
import '@pnp/sp/webs';
import '@pnp/sp/site-users/web';
import {from} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  constructor(private http: HttpClient) {


  }

  getTitle(){
    // let siteRoot = 'https://projects1.sharepoint.com/sites/Yevgeny/'
    // return this.http.get(siteRoot +"_api/web/lists/GetByTitle(Jobs)");
  }

  getUsers() {
    // return  from(this.getConfigInfo().web.get());
  }


   getConfigInfo() {
   //  let siteRoot = 'https://projects1.sharepoint.com/sites/Yevgeny'
   // return sp.configure({
   //    mode:'no-cors',
   //      headers: {
   //        Accept: 'application/json;odata=verbose',
   //      },
   //
   //    }, siteRoot + '_api/web/lists/GetByTitle(\'Jobs\')'
   //  );


   }
}
