import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-demo';
  rating=3.2;
  starWidth= this.rating * 75/5;
  starColor="red";
  customerName="alex";

  performAction():void
  {
    alert("button is clicked");
    this.title="Binding demo in angular";
   // document.getElementById("a").style.opacity = "0.0";
   // document.getElementById("a").disabled = true;
  }
}
