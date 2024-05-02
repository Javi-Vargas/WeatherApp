import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // creating a method to get weatherData by city name taking in a string
  //using the environment folder/files we set the Host Name&Value and the Key Name&Value

  //uncomment when find a new weather API to use :)
  getWeatherData(cityName: string) : void {//Observable<WeatherData> {
    // https://open-weather13.p.rapidapi.com/city/Winter%20Park/EN
    //Trying out a diff method of loading the Url so that I can actually have it be dynamic.
    //const apiUrl = `${environment.weatherApiBaseUrl}/city/${cityName}/EN`;  //this line is needed to get the apiUrl formatting correct

      // return this.http.get<WeatherData>(apiUrl, {
      //   headers: new HttpHeaders()
      //   .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      //   .set(environment.XRapidAPIKeyHearderName, environment.XRapidAPIKeyHeaderValue),
      //   params: new HttpParams()
      //   .set('city', cityName)
      // });
  }
}
