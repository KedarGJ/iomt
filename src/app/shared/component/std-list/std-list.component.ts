import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
@Input() getStdArray!: Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
