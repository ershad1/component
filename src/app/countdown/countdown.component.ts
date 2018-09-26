import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input()
  init: number = null;
  public counter: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountdown();
    }
  }


  private doCountdown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  private processCountdown() {
    //emit event COUNT
    console.log("count is ", this.counter);
    if (this.counter == 0) {
      //emit event COUNTER END
      console.log("--counter end--");
    }
    else{
      this.doCountdown();
    }
  }
}
