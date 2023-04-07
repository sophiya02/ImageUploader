import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-uploaded',
  templateUrl: './image-uploaded.component.html',
  styleUrls: ['./image-uploaded.component.scss']
})
export class ImageUploadedComponent implements OnInit {
  link: string ='';
  constructor(private router: ActivatedRoute){

  }

  ngOnInit(){
    this.router.queryParams.subscribe(params =>{
      // this.link = params['uploadedImageUrl'];
      this.link=`../../../assets/images/${params['name']}`;
    })
  }

}
