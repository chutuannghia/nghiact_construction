import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thietke',
  templateUrl: './thietke.component.html',
  styleUrls: ['./thietke.component.scss']
})
export class ThietkeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listItem = [
    ['../../../assets/images/TheCoffeeHouse.png','The Coffee House'],
    ['../../../assets/images/KingCoffee.png','king Coffee'],
    ['../../../assets/images/TerraCoffee.png','Terra Coffee'],
    ['../../../assets/images/TexasChicken.png','TexasChicken'],
  ];
}
