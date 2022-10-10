import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  sl_image = [
    ['selected1.jpg','selected 1'],
    ['selected2.jpg','selected 2'],
    ['selected3.jpg','selected 3'],
    ['selected4.jpg','selected 4'],
    ['selected5.jpg','selected 5'],
    ['selected6.jpg','selected 6'],
    ['selected7.jpg','selected 7'],
    ['selected8.jpg','selected 8'],
  ];

  image = [
    ['image1.jpg','image 1'],
    ['image2.jpg','image 2'],
    ['image3.jpg','image 3'],
    ['image4.jpg','image 4'],
    ['image5.jpg','image 5'],
    ['image6.jpg','image 6'],
    ['image7.jpg','image 7'],
    ['image8.jpg','image 8'],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
