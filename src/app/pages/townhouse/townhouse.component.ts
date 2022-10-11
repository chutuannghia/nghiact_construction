import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-townhouse',
  templateUrl: './townhouse.component.html',
  styleUrls: ['./townhouse.component.scss']
})
export class TownhouseComponent implements OnInit {
  change = 1;
  anhson = [
    ['son1.jpg','Anh Sơn 1'],
    ['son2.jpg','Anh Sơn 2'],
    ['son3.jpg','Anh Sơn 3'],
    ['son4.jpg','Anh Sơn 4'],
    ['son5.jpg','Anh Sơn 5'],
    ['son6.jpg','Anh Sơn 6'],
    ['son7.jpg','Anh Sơn 7'],
    ['son8.jpg','Anh Sơn 8'],
    ['son9.jpg','Anh Sơn 9'],
    ['son10.jpg','Anh Sơn 10'],
    ['son11.jpg','Anh Sơn 11'],
    ['son12.jpg','Anh Sơn 12'],
  ];

  anhloc = [
    ['loc1.jpg','Anh Lộc 1'],
    ['loc2.jpg','Anh Lộc 2'],
    ['loc3.jpg','Anh Lộc 3'],
    ['loc4.jpg','Anh Lộc 4'],
    ['loc5.jpg','Anh Lộc 5'],
    ['loc6.jpg','Anh Lộc 6'],
    ['loc7.jpg','Anh Lộc 7'],
    ['loc8.jpg','Anh Lộc 8'],
    ['loc9.jpg','Anh Lộc 9'],
    ['loc10.jpg','Anh Lộc 10'],
    ['loc11.jpg','Anh Lộc 11'],
  ];

  anhphu = [
    ['phu1.jpg','Anh Phú 1'],
    ['phu2.jpg','Anh Phú 2'],
    ['phu3.jpg','Anh Phú 3'],
    ['phu4.jpg','Anh Phú 4'],
    ['phu5.jpg','Anh Phú 5'],
    ['phu6.jpg','Anh Phú 6'],
  ];

  chiloan = [
    ['loan1.jpg','Anh Loan 1'],
    ['loan2.jpg','Anh Loan 2'],
    ['loan3.jpg','Anh Loan 3'],
    ['loan4.jpg','Anh Loan 4'],
    ['loan5.jpg','Anh Loan 5'],
    ['loan6.jpg','Anh Loan 6'],
    ['loan7.jpg','Anh Loan 7'],
    ['loan8.jpg','Anh Loan 8'],
    ['loan9.jpg','Anh Loan 9'],
    ['loan10.jpg','Anh Loan 10'],
  ];
   slickleft(){
    this.change = this.change - 1;
    if(this.change < 1){
      this.change = 2;
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
    this.change += this.change;
    if(this.change > 2){
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
  constructor(private router: ActivatedRoute,@Inject(PLATFORM_ID) private platform: Object) { }

  ngOnInit(): void {
  }

}
