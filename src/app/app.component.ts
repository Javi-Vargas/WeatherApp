import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Values, WeatherData, Location } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'Orlando';
  weatherData?: WeatherData;
  values?: Values;
  location?: Location;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
}

// export class AppComponent{
  
//   constructor(private weatherService: WeatherService) {

//   }
  
//   cityName: string = "Orlando";
//   weatherData?: WeatherData;
//   values?: Values;

//   ngOnInit() : void {
//     this.getWeatherData(this.cityName);
//     this.cityName = '';
//   }

//   onSubmit() {
//     this.getWeatherData(this.cityName);
//     this.cityName = '';
//   }

//   private getWeatherData(cityName : string) {
//     //     this.weatherService.getWeatherData(cityName).subscribe({
//     //   next: (response) => {
//     //     this.weatherData = response;
//     //     console.log(response);
//     //   }
//     // });
//   }
// }

