import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component';

  counterProgress: number = 0;
  totalCountDown: number = 15;

  updateProgress($event) {
    this.counterProgress = (this.totalCountDown - $event) / this.totalCountDown * 100;
  }

  countdownFinished(){
    console.log("countdown finished")
  }
}
