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
       
        const processtUrl = 'process';
        return this.httpClient.get<any>(processtUrl);
    }
}
