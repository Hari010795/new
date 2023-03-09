import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './weather.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class AppComponent implements OnInit {
  title = 'weather';

  dataSource = new MatTableDataSource<any>([])
   weatherSearchForm!: FormGroup;
   

  displayedColumns: string[] = ['time', 'temperature', 'icon', 'rain','wind']
  dataSource1: any;
  formValues: any;
  id: any;
  dataSource2: any;
  dataSource3: any;
  dataSource4: any;
  dataSource5: any;
  dataSource11: any;
  dataSource22: any;
  dataSource33: any;
  dataSource44: any;
  dataSource55: any;
  location: any;
  region: any;
  
  
  constructor(public weathersvc: WeatherService,
    private formBuilder: FormBuilder){ }

  ngOnInit() {

    this.weatherSearchForm = this.formBuilder.group({
      location: [""],

    });

  this.weathersvc.getonload().subscribe(
    (data) =>{
      this.dataSource1 = data.response.forecast.forecastday[0].hour;
       this.dataSource11 = data.response.forecast.forecastday[0].date;
      this.dataSource2 = data.response.forecast.forecastday[0].hour;
       this.dataSource22 = data.response.forecast.forecastday[1].date;
      this.dataSource3 = data.response.forecast.forecastday[0].hour;
      this.dataSource33 = data.response.forecast.forecastday[2].date;
      this.dataSource4 = data.response.forecast.forecastday[0].hour;
      // this.dataSource44 = data.response.forecast.forecastday[3].date;
      this.dataSource5 = data.response.forecast.forecastday[0].hour;
      // this.dataSource55 = data.response.forecast.forecastday[4].date;
      this.location = data.response.location.name;
      this.region = data.response.location.region;
      console.log(data);
    console.log( this.dataSource11);
    // console.log(location);
    
      
    }
  )
}

toggleRow(element:{expanded:boolean}){
element.expanded = !element.expanded;
}

citycall(formValues:any){
  console.log(formValues);
   
   
  this.weathersvc.getweather(formValues.location).subscribe(
    (response) => {
      this.dataSource1 = response.response.forecast.forecastday[0].hour;
      this.dataSource2 = response.response.forecast.forecastday[1].hour;
      this.dataSource3 = response.response.forecast.forecastday[2].hour;
      // this.dataSource4 = response.response.forecast.forecastday[3].hour;
      // this.dataSource5 = response.response.forecast.forecastday[4].hour;
      this.location = response.response.location.name;
      this.region = response.response.location.region;

      console.log(this.dataSource1);
      console.log(this.dataSource2);
      console.log(this.dataSource3);

       console.log(response)
    }
  )
  
}

}

