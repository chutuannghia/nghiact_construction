
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  value = 0;
 image = [
    ['(BÀ) TRẦN THỊ TUYẾT NHUNG EM','../../../assets/images/TUYETNHUNG.png','KẾ TOÁN TRƯỞNG','Tốt nghiệp đại học chuyên ngành kế toán, với hơn 7 năm kinh nghiệm về quản trị tài chính, kế toán và nhân sự.'],
    ['(ÔNG) ĐINH DUY HÒA','../../../assets/images/DUYHOA.png','GIÁM ĐỐC','Tốt nghiệp đại học chuyên ngành xây dựng, Thành lập công ty TNHH New Construction đồng thời giữ chức vụ giám đốc điều hành công ty cho đến nay.'],
    ['(BÀ) PHẠM THỊ ĐĂNG KIM NGÂN','../../../assets/images/NGAN.png','TRƯỞNG PHÒNG NHÂN SỰ',' Tốt nghiệp đại học chuyên ngành quản trị nhân lực với hơn 10 năm kinh nghiệm. ']
  ];
  constructor() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay:true,
    margin:30,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }
  ngOnInit() {
  }
}
