import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  change = 1;
  gym = [
    ['gym1.jpg','Gym Gigamall Thủ Đức 1'],
    ['gym2.jpg','Gym Gigamall Thủ Đức 2'],
    ['gym3.jpg','Gym Gigamall Thủ Đức 3'],
    ['gym4.jpg','Gym Gigamall Thủ Đức 4'],
    ['gym5.jpg','Gym Gigamall Thủ Đức 5'],
    ['gym6.jpg','Gym Gigamall Thủ Đức 6'],
    ['gym7.jpg','Gym Gigamall Thủ Đức 7'],
    ['gym8.jpg','Gym Gigamall Thủ Đức 8'],
    ['gym9.jpg','Gym Gigamall Thủ Đức 9'],
    ['gym10.jpg','Gym Gigamall Thủ Đức 10'],
    ['gym11.jpg','Gym Gigamall Thủ Đức 11'],
    ['gym12.jpg','Gym Gigamall Thủ Đức 12'],
    ['gym13.jpg','Gym Gigamall Thủ Đức 13'],
    ['gym14.jpg','Gym Gigamall Thủ Đức 14'],
    ['gym15.jpg','Gym Gigamall Thủ Đức 15'],
    ['gym16.jpg','Gym Gigamall Thủ Đức 16'],
    ['gym17.jpg','Gym Gigamall Thủ Đức 17'],
    ['gym18.jpg','Gym Gigamall Thủ Đức 18'],
    ['gym19.jpg','Gym Gigamall Thủ Đức 19'],
    ['gym20.jpg','Gym Gigamall Thủ Đức 20'],
  ];
  Mushroom=[
      ['md1.jpg','Mushroom Decor 1'],
      ['md2.jpg','Mushroom Decor 2'],
      ['md3.jpg','Mushroom Decor 3'],
      ['md4.jpg','Mushroom Decor 4'],
      ['md5.jpg','Mushroom Decor 5'],
      ['md6.jpg','Mushroom Decor 6'],
  ];
  soi=[
    ['soi1.jpg','Shire Oak Interational 1'],
    ['soi2.jpg','Shire Oak Interational 2'],
    ['soi3.jpg','Shire Oak Interational 3'],
    ['soi4.jpg','Shire Oak Interational 4'],
  ];
  vml=[
    ['vml1.jpg','Cửa Việt Minh Long 1'],
    ['vml2.jpg','Cửa Việt Minh Long 2'],
    ['vml3.jpg','Cửa Việt Minh Long 3'],
    ['vml4.jpg','Cửa Việt Minh Long 4'],
    ['vml5.jpg','Cửa Việt Minh Long 5'],
  ];

  dnm=[
    ['dnm1.jpg','Đại Nam Music 1'],
    ['dnm2.jpg','Đại Nam Music 2'],
    ['dnm3.jpg','Đại Nam Music 3'],
    ['dnm4.jpg','Đại Nam Music 4'],
  ];
  phc=[
    ['phc1.jpg','Phố Hương Coffee 1'],
    ['phc2.jpg','Phố Hương Coffee 2'],
    ['phc3.jpg','Phố Hương Coffee 3'],
    ['phc4.jpg','Phố Hương Coffee 4'],
    ['phc5.jpg','Phố Hương Coffee 5'],
    ['phc6.jpg','Phố Hương Coffee 6'],
  ];

  vpcg = [
    ['vpcg1.jpg','VP Cao Gia 1'],
    ['vpcg2.jpg','VP Cao Gia 2'],
    ['vpcg3.jpg','VP Cao Gia 3'],
    ['vpcg4.jpg','VP Cao Gia 4'],
    ['vpcg5.jpg','VP Cao Gia 5'],
    ['vpcg6.jpg','VP Cao Gia 6'],
    ['vpcg7.jpg','VP Cao Gia 7'],
    ['vpcg8.jpg','VP Cao Gia 8'],
    ['vpcg9.jpg','VP Cao Gia 9'],
    ['vpcg10.jpg','VP Cao Gia 10'],
  ];

  zs = [
    ['zs1.jpg','Zaha Spa 1'],
    ['zs2.jpg','Zaha Spa 2'],
    ['zs3.jpg','Zaha Spa 3'],
    ['zs4.jpg','Zaha Spa 4'],
    ['zs5.jpg','Zaha Spa 5'],
    ['zs6.jpg','Zaha Spa 6'],
    ['zs7.jpg','Zaha Spa 7'],
    ['zs8.jpg','Zaha Spa 8'],
    ['zs9.jpg','Zaha Spa 9'],
    ['zs10.jpg','Zaha Spa 10'],
    ['zs11.jpg','Zaha Spa 11'],
    ['zs12.jpg','Zaha Spa 12'],
    ['zs13.jpg','Zaha Spa 13'],
  ];

  sg = [
    ['sg1.jpg','Sagen Group 1'],
    ['sg2.jpg','Sagen Group 2'],
    ['sg3.jpg','Sagen Group 3'],
    ['sg4.jpg','Sagen Group 4'],
    ['sg5.jpg','Sagen Group 5'],
    ['sg6.jpg','Sagen Group 6'],
    ['sg7.jpg','Sagen Group 7'],
    ['sg8.jpg','Sagen Group 8'],
    ['sg9.jpg','Sagen Group 9'],
    ['sg10.jpg','Sagen Group 10'],
  ];

  constructor(private router: ActivatedRoute,@Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
  }
  slickleft(){
    this.change = this.change - 1;
    if(this.change < 1){
      this.change = 3;
    }
    if (isPlatformBrowser(this.platform)) {
      // here you can run any browser specific code, like:
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
   }
   slickright(){
    this.change = this.change + 1;
    if(this.change >= 4){
      this.change = 1;
    }
    if (isPlatformBrowser(this.platform)) {
      // here you can run any browser specific code, like:
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
   }
}
