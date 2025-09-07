import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-awzk1200a',
  templateUrl: './awzk1200a.component.html',
  styleUrls: ['./awzk1200a.component.scss'],
})
export class Awzk1200aComponent {
  receivedData: string = '';
  dataToSend = 'AからBへ渡すデータ';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    console.log('test-aに入った:');
  }

  goToB() {
    this.router.navigate(['/awzk1200/b'], { state: { data: this.dataToSend } });
  }
}
