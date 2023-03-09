import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService{

  constructor(public http:HttpClient) { 

  }
  
getweather( location: any):Observable<any>{
  return this.http.get
  ( 'https://api.weatherapi.com/v1/forecast.json?key=c4a82f94ea574dfea4592856231302&q=' + location +'&days=7' )
  .pipe(map(response => ({
      
    response
  }),
  )
  )
    
}



getonload() :Observable<any>{
  return this.http.get
  ( 'https://api.weatherapi.com/v1/forecast.json?key=c4a82f94ea574dfea4592856231302&q=chennai&days=7' )
  .pipe(map(response => ({
    response
  }),
  )
  )
}
  
}
