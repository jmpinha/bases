import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent implements OnInit {
counterSignal=signal(10);
  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.counterSignal.set(10);
    }
    decrement() {
      this.counterSignal.update(current=>current-1);
    }
    increment() {
      this.counterSignal.update(current=>current+1);
    }
}
