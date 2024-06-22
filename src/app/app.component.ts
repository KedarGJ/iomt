import { Component, OnInit } from '@angular/core';
import { Istd } from './shared/models/std.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iomt';
  stdArray : Array<Istd> = [
  //   {
  //   fname: "kedar",
  //   lname:"joshi",
  //   email:"kgj123@gmail.com",
  //   contact:"12345678"
  // }
]
  constructor(){}
  ngOnInit(): void {
    
  }
  getStdData(data : Istd){
    this.stdArray.push(data)
  }
}
