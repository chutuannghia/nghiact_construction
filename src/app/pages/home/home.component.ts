import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  image = [
    ['(BÀ) TRẦN THỊ TUYẾT NHUNG EM','../../../assets/images/TUYETNHUNG.png','KẾ TOÁN TRƯỞNG','Tốt nghiệp đại học chuyên ngành kế toán, với hơn 7 năm kinh nghiệm về quản trị tài chính, kế toán và nhân sự.'],
    ['(ÔNG) ĐINH DUY HÒA','GIÁM ĐỐC','../../../assets/images/DUYHOA.png','Tốt nghiệp đại học chuyên ngành xây dựng, Thành lập công ty TNHH New Construction đồng thời giữ chức vụ giám đốc điều hành công ty cho đến nay.'],
    ['(BÀ) PHẠM THỊ ĐĂNG KIM NGÂN','../../../assets/images/NGAN.png','TRƯỞNG PHÒNG NHÂN SỰ',' Tốt nghiệp đại học chuyên ngành quản trị nhân lực với hơn 10 năm kinh nghiệm. ']
  ];

  ngOnInit(): void {
  }
}
