import { Component, OnInit } from '@angular/core';
import { Photos } from './photos.model';

@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css']
})
export class PhotodetailComponent implements OnInit {

  constructor() { }
  photos:Photos;


  ngOnInit() {
    console.log(this.photos.description);
    console.log(this.photos.imagePath);
  }

}
