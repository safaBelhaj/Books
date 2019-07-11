import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bib';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDc320vFm0Xmx5ZevA5uVO-toLnqyp14No",
      authDomain: "biblio-efffd.firebaseapp.com",
      databaseURL: "https://biblio-efffd.firebaseio.com",
      projectId: "biblio-efffd",
      storageBucket: "biblio-efffd.appspot.com",
      messagingSenderId: "918673275718",
      appId: "1:918673275718:web:0209ac4e172910d8"
    };
    firebase.initializeApp(firebaseConfig);

  }
}
