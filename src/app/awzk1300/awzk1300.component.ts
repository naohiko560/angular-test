import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awzk1300',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awzk1300.component.html',
  styleUrls: ['./awzk1300.component.scss'],
})
export class Awzk1300Component {
  showA = true;
  dataAtoB: any;
  dataBtoA: any;

  ngOnInit() {}

  goToB() {
    this.dataAtoB = {
      id: 'A',
      name: '山田太郎',
      age: 30,
      address: '東京都',
    };
    this.showA = false;
    this.goToBInit();
  }

  goToBInit() {
    console.log('test-:this.dataAtoB', this.dataAtoB);
  }

  goToA() {
    this.dataBtoA = {
      id: 'B',
      name: '鈴木花子',
      age: 25,
      address: '大阪府',
    };
    this.showA = true;
    this.goToAInit();
  }

  goToAInit() {
    console.log('test-:this.dataBtoA', this.dataBtoA);
  }
}
