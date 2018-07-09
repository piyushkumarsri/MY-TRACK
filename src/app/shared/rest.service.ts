import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RestService {

    constructor(private http: HttpClient) { }

    fetch(url) {
        return this.http.get<RestResponse>(this.getUrl(url));
    }

    post(url, data) {
        return this.http.post<RestResponse>(this.getUrl(url), data);
    }


    private getUrl(path) {
        return environment.apiPath + path;
    }
}

interface RestResponse {
    status:boolean;
    data?:any;
    msg:string;
    error:string;
}