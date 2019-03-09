import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';

  public onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA1knsjEy3aQVHqdmFtLhHtPWn1hAAz3r0",
      authDomain: "ng-recipe-book-6cb21.firebaseapp.com"
    });
  }
}
