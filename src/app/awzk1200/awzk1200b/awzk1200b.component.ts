import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-awzk1200b',
  templateUrl: './awzk1200b.component.html',
  styleUrls: ['./awzk1200b.component.scss'],
})
export class Awzk1200bComponent {
  receivedData: string = '';
  dataToSend = 'BからAへ渡すデータ';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const state = this.location.getState() as { data?: string };
    console.log('test-bに入った:', state?.data);
  }

  goBack() {
    this.location.back();
  }
}
