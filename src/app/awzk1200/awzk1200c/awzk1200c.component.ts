import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-awzk1200c',
  templateUrl: './awzk1200c.component.html',
  styleUrls: ['./awzk1200c.component.scss'],
})
export class Awzk1200cComponent {
  receivedData: string = '';
  dataToSend = 'BからAへ渡すデータ';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const state = this.location.getState() as { data?: string };
    console.log('test-cに入った:', state?.data);
  }

  goBack() {
    this.location.back();
  }
}
