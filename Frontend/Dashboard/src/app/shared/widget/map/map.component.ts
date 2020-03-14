import { Component, OnInit } from "@angular/core";
import { get } from "scriptjs";
declare var google;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    get("https://maps.googleapis.com/maps/api/js?key=", () => {
      this.initMap();
    });
  }
  initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}
