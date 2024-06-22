import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../models/std.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  @ViewChild('stdForm') stdForm !: NgForm
  @Output() emitstdObj : EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(){
    if(this.stdForm.valid){
      let stdObj = this.stdForm.value;
      this.emitstdObj.emit(stdObj)
      this.stdForm.reset()
    }
  }

}
