import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Message} from '../../models/Messgae';

const httpOptions ={
    headers:new HttpHeaders(
        {'Content-Type':'application/json','Access-Control-Allow-Methods':'GET,POST,PUT,OPTIONS,DELETE',
        'Access-Control-Allow-Headers':'Origin, X-Requested-With.Content-Type,Accept'
      }
    )
};

@Injectable({
    providedIn: 'root'
})
export class GetMsgsService {
    //private headers = new Headers({'Content-Type': 'application/json'});
    msgUrl='http://10.10.3.150:8080/rates/chatbot/exchange-rate/currency/';
    constructor(private http:HttpClient) {}
    getMsgResp(msg:String):Observable<any>{
        return this.http.get<String>(this.msgUrl+msg);
    }
    // updateEmployee(employee :Employee):Observable<any>{
    //     return this.http.put(this.empUrl,JSON.stringify(employee),httpOptions);
    // }
    // insertEmployee(employee: Employee):Observable<any>{
    //     return this.http.post(this.empUrl,employee);

    // }
}