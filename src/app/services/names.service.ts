import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http:HttpClient) { }

  private URL:string='https://uinames.com/api/?ext&amount=1'

  public GetData(){
    return this.http.get(`${this.URL}`)
  }



}
