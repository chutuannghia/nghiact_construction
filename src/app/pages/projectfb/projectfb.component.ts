import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectfb',
  templateUrl: './projectfb.component.html',
  styleUrls: ['./projectfb.component.scss']
})
export class ProjectfbComponent implements OnInit {
  datafb = [
    ['fb-banner1.jpg','January Bakery & Tea House','January Bakery & Tea House','Chủ Đâu Tư: Anh Nhật','Quy mô: 200 m2','Mức đầu tư: 1 tỷ'],
    ['fb-banner2.jpg','Redi Coffee, 166 Nguyễn Oanh','Redi Coffee, 166 Nguyễn Oanh','Cà phê Gò Vấp','',''],
    ['fb-banner3.jpg','Cà Phê Quận 7','Cà Phê Quận 7 - Cà Phê Quận 7','Chủ Đầu Tư: Ms. Hương Giang','Quy mô: 196 m2','Mức đầu tư: 1.6 tỷ'],
    ['fb-banner4.jpg','Fulong Tea','Fulong Tea - Fulong Tea','Chủ Đầu Tư: Anh Phong','Quy mô: 24m2','Mức đầu tư: 700 triệu'],
    ['fb-banner5.jpg','Banana King','Banana King - Banana King','Chủ Đầu Tư: Anh Lê Trung Nguyên','Quy mô: 153m2','Mức đầu tư: 1.8 tỷ'],
    ['fb-banner6.jpg','MTP Coffee','MTP Coffee - MTP Coffee','Chủ Đầu Tư: Ms. Thúy','Quy mô: 100 m2','Mức đầu tư: 600 triệu'],
    ['fb-banner6.jpg','Sành Coffee','Sành Coffee - Sành Coffee','Chủ đầu tư: Anh Lê Văn Long','Quy mô: 100m2','Ngân sách: 900 triệu'],
    ['fb-banner7.jpg','Gió Coffee','Gió Coffee - Gió Coffee','Chủ đầu tư: Anh Trọng','Quy mô: 250 m2','Mức đầu tư: 900 triệu'],
    ['fb-banner8.jpg','MOM Tea & Coffee','MOM Tea & Coffee - MOM Tea & Coffee','Chủ đầu tư: Ms. Hiếu','Quy mô: 200m2','Ngân sách: 750 triệu'],
    ['fb-banner9.jpg','H & T Hong Kong','H & T Hong Kong - H & T Hong Kong','Chủ đầu tư: Ms. Trân','Quy mô: 120m2','Mức đầu tư: 800 triệu'],
    ['fb-banner10.jpg','Sky Bar','Sky Bar - Sky Bar','Chủ Đầu Tư: Anh Hòa','Quy mô: 570 m2','Mức đầu tư: 3.7 tỷ'],
    ['fb-banner11.jpg','59 Võ Oanh, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh','59 Võ Oanh, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh - Trà Chanh 74','Chủ đầu tư: Ms. Diễm Phạm','Quy mô: 120 m2','Mức đầu tư: 400 triệu'],
    ['fb-banner12.jpg',"TOYS 'N' DRINKERS","TOYS 'N' DRINKERS - TOYS 'N' DRINKERS",'Chủ đầu tư: Anh Sơn','Quy mô: 80m2','Mức đầu tư: 180 triệu'],
    ['fb-banner13.jpg','Coffee & Office','Coffee & Office - Oslo Coffee & Office','- Chủ Đầu Tư: Anh Trí','- Quy mô:120m2','- Mức đầu tư: 400 triệu'],
    ['fb-banner14.jpg','Coffee Shop','Coffee Shop - Hoàng Viên Coffee','- Chủ đầu tư: Chị Hồng','- Quy mô: 150m2','- Mức đầu tư: 500tr']
  ];
  dataimg = [
    [
      ['tbj1.jpg'],
      ['tbj2.jpg'],
      ['tbj3.jpg'],
      ['tbj4.jpg'],
      ['tbj5.jpg'],
      ['tbj6.jpg'],
      ['tbj7.jpg'],
      ['tbj8.jpg'],
      ['tbj9.jpg'],
    ],
    [
      ['rc1.jpg'],
      ['rc2.jpg'],
      ['rc3.jpg'],
      ['rc4.jpg'],
      ['rc5.jpg'],
      ['rc6.jpg'],
    ],
    [
      ['cpq1.jpg'],
      ['cpq2.jpg'],
      ['cpq3.jpg'],
      ['cpq4.jpg'],
      ['cpq5.jpg'],
      ['cpq6.jpg'],
      ['cpq7.jpg'],
      ['cpq8.jpg'],
      ['cpq9.jpg'],
      ['cpq10.jpg'],
      ['cpq11.jpg'],
      ['cpq12.jpg'],
    ],
    [
      ['ft1.jpg'],
      ['ft2.jpg'],
      ['ft3.jpg'],
      ['ft4.jpg'],
      ['ft5.jpg'],
      ['ft6.jpg'],
    ]
    ,[
      ['bk1.jpg'],
      ['bk2.jpg'],
      ['bk3.jpg'],
      ['bk4.jpg'],
      ['bk5.jpg'],
      ['bk6.jpg'],
      ['bk7.jpg'],
      ['bk8.jpg'],
      ['bk9.jpg'],
      ['bk10.jpg'],
      ['bk11.jpg'],
    ]
    ,[
      ['mtp1.jpg'],
      ['mtp2.jpg'],
      ['mtp3.jpg'],
      ['mtp4.jpg'],
      ['mtp5.jpg'],
      ['mtp6.jpg'],
    ]
    ,[
      ['sc1.jpg'],
      ['sc2.jpg'],
      ['sc3.jpg'],
      ['sc4.jpg'],
      ['sc5.jpg'],
      ['sc6.jpg'],
      ['sc7.jpg'],
      ['sc8.jpg'],
      ['sc9.jpg'],
      ['sc10.jpg'],
    ],
    ,[
      ['gc1.jpg'],
      ['gc2.jpg'],
      ['gc3.jpg'],
      ['gc4.jpg'],
      ['gc5.jpg'],
      ['gc6.jpg'],
      ['gc7.jpg'],
      ['gc8.jpg'],
    ]
    ,[
      ['mtc1.jpg'],
      ['mtc2.jpg'],
      ['mtc3.jpg'],
      ['mtc4.jpg'],
      ['mtc5.jpg'],
      ['mtc6.jpg'],
      ['mtc7.jpg'],
      ['mtc8.jpg'],
      ['mtc9.jpg'],
      ['mtc10.jpg'],
      ['mtc11.jpg'],
      ['mtc12.jpg'],
      ['mtc13.jpg'],
      ['mtc14.jpg'],
      ['mtc15.jpg'],
      ['mtc16.jpg'],
      ['mtc17.jpg'],
      ['mtc18.jpg'],
      ['mtc19.jpg'],
      ['mtc20.jpg'],
      ['mtc21.jpg'],
      ['mtc22.jpg'],
    ]
    ,[
      ['hk1.jpg'],
      ['hk2.jpg'],
      ['hk3.jpg'],
      ['hk4.jpg'],
      ['hk5.jpg'],
    ]
    ,[
      ['sb1.jpg'],
      ['sb2.jpg'],
      ['sb3.jpg'],
      ['sb4.jpg'],
      ['sb5.jpg'],
      ['sb6.jpg'],
      ['sb7.jpg'],
      ['sb8.jpg'],
    ]
    ,[
      ['tc1.jpg'],
      ['tc2.jpg'],
      ['tc3.jpg'],
      ['tc4.jpg'],
      ['tc5.jpg'],
      ['tc6.jpg'],
    ]
    ,[
      ['td1.jpg'],
      ['td2.jpg'],
      ['td3.jpg'],
      ['td4.jpg'],
      ['td5.jpg'],
      ['td6.jpg'],
    ]
    ,[
      ['oco1.jpg'],
      ['oco2.jpg'],
      ['oco3.jpg'],
      ['oco4.jpg'],
      ['oco5.jpg'],
      ['oco6.jpg'],
      ['oco7.jpg'],
      ['oco8.jpg'],
    ]
    ,[
      ['hvc1.jpg'],
      ['hvc2.jpg'],
      ['hvc3.jpg'],
      ['hvc4.jpg'],
      ['hvc5.jpg'],
      ['hvc6.jpg'],
      ['hvc7.jpg'],
      ['hvc8.jpg'],
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
