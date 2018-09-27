import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  @Input() init: number = null;

  @Output() onComplete = new EventEmitter<void>();
  @Output() onDecrease = new EventEmitter<number>();

  public counter: number = 0;
  private countdownTimerRef= null;
  constructor() {
  }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }


  private doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  private clearTimeout(){
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  private processCountdown() {
    this.onDecrease.emit(this.counter);
    console.log("count is ", this.counter);
    if (this.counter == 0) {
      this.onComplete.emit();
      console.log("--counter end--");
    }
    else {
      this.doCountdown();
    }
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }
}
