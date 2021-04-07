import {Injectable} from '@angular/core';
import {HttpClient,HttpParams, JsonpClientBackend} from '@angular/common/http';
import {  HttpResponse} from '@angular/common/http';
import {Proces} from './proces';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProcessService {
    constructor(private httpClient: HttpClient) {
    }

    getAllProcess(): Observable<any> {
       
        const processtUrl = 'process';
        return this.httpClient.get<any>(processtUrl);
    }


    sendSelectedProcess(listTopost:Proces[])

    {
        const body=JSON.stringify(listTopost);
        const headers = {'Content-Type':'application/json'};
        console.log(body)
        
        const url = 'add_to_db'
      return this.httpClient.post(url,body,{headers})
      
    } 

    
    



}
