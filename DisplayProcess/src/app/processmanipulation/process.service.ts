import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Proces} from './proces';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProcessService {
    constructor(private httpClient: HttpClient) {
    }

    getAllProcess(): Observable<any> {
       
        const processtUrl = 'http://localhost:4200/assets/data/db.json';
        return this.httpClient.get(processtUrl);
    }
}
