import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  constructor(private weatherService: WeatherService) {

  }
  
  cityName: string = "Orlando";
  weatherData?: WeatherData;

  ngOnInit() : void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName : string) {
    //     this.weatherService.getWeatherData(cityName).subscribe({
    //   next: (response) => {
    //     this.weatherData = response;
    //     console.log(response);
    //   }
    // });
  }
}

//commented out the code that does the API call cuz I ran out of API calls for the MONTH (cuz I didn't know I had a fixed amount)
// export class AppComponent implements OnInit{
  
//   constructor(private weatherService: WeatherService) {

//   }
  
//   weatherData?: WeatherData;

//   ngOnInit(): void {
//     this.weatherService.getWeatherData("Winter Park").subscribe({
//       next: (response) => {
//         this.weatherData = response;
//         console.log(response);
//       }
//     });
//   }
// }
