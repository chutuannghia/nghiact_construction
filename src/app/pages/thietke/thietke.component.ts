import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-thietke',
  templateUrl: './thietke.component.html',
  styleUrls: ['./thietke.component.scss']
})
export class ThietkeComponent implements OnInit {
  constructor() {

    }
  ngOnInit(): void {

  }
  listItem = [
    ['../../../assets/images/TheCoffeeHouse.png','The Coffee House'],
    ['../../../assets/images/KingCoffee.png','king Coffee'],
    ['../../../assets/images/TerraCoffee.png','Terra Coffee'],
    ['../../../assets/images/TexasChicken.png','TexasChicken'],
    ['../../../assets/images/PizzaCompany.png','Pizza Company'],
    ['../../../assets/images/Sasin.png','Mì cay Sasin'],
    ['../../../assets/images/Swensens.png','Swensens'],
    ['../../../assets/images/TGDĐ.png','Thế Giới Di Động'],
    ['../../../assets/images/DMX.png','Điện Máy Xanh'],
    ['../../../assets/images/BHX.png','Bách Hóa Xanh'],
    ['../../../assets/images/SibaFood.png','Siba Food'],
    ['../../../assets/images/BoostJuice.png','Boost Juice'],
    ['../../../assets/images/ValentinoCreations.png','Valentino Creations'],
    ['../../../assets/images/Fumart.png','Fumart'],
    ['../../../assets/images/PepperLunch.png','Pepper Lunch'],
    ['../../../assets/images/Pharmacity.png','Pharmacity']
  ];
}
