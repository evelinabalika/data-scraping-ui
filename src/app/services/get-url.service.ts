import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetUrlService {

  constructor(private http: HttpClient) 
  {

  }

  private api = environment.api;



  getUrl(url: string):Observable<any>
  {
      console.log(this.api);
      //headers: HttpHeaders;
      const headers = {'Content-Type':'application/json'};
      const body = {url: url};
      return this.http.post<any>(this.api, body , {headers});
  }

}
