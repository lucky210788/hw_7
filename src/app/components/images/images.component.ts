import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lec-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  public images = [
    {src: 'assets/1.jpg', alt: '1'},
    {src: 'assets/2.jpg', alt: '2'},
    {src: 'assets/3.jpg', alt: '3'}
  ];
  constructor() { }

  ngOnInit() {
  }
}
