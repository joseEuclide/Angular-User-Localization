import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserLocalization';
  lat = 0
  longi = 0

  ngOnInit(){
     this.currentUserLocalization();
  }
  currentUserLocalization(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.longi = position.coords.longitude;
      })
    }else{
      alert("Geolocalization is not supported in this browser, use other.")
    }
  }
}
