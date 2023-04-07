import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileItem } from 'ng2-file-upload/file-upload/file-item.class';
import { FileUploader } from 'ng2-file-upload';

const url = 'http://localhost:3000/api/v1/image';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  link='https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg?resize=768%2C432'

  public uploader: FileUploader = new FileUploader({
    url: url,
    disableMultipart: false,
    autoUpload: true,
    itemAlias: 'image'
  })

  onFileSelect(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    // const file = input.files[0] ;
    console.log('Selected input:', input);
  }

  chooseFile(input: HTMLInputElement , event: Event){
    event.preventDefault();
    input.click()
    console.log(event);
    this.uploader.uploadAll();
  }

  // onFileDropped(event: Event ){
  //   console.log(event);

  //   this.uploader.uploadAll();
  // }
  constructor(private router: Router){}
  // isUploading:boolean=false;

  ngOnInit(){


    this.uploader.onAfterAddingFile = (file) =>{
      file.withCredentials = false;
    };
    this.uploader.onProgressItem = () => {
      // this.isUploading = true;
      this.router.navigate(['image-upload/image-uploading']);

    }
    this.uploader.onCompleteItem = (item: FileItem, response: any, status: any) => {
      const res = JSON.parse(response)
      console.log('item', item);
      console.log('response.uploadedImageUrl', res.filename)
      // this.toastr.success('File Succesfully uploaded');
      // this.router.navigate(['/image-uploaded'], {queryParams: {uploadedImageUrl: `C:\\Users\\Lenovo\\Desktop\\projects\\frontend_projects\\image-uploader\]server\\uploads\\${item._file.name}`}});
      this.router.navigate(['image-upload/image-uploaded'], {queryParams:{name: res.filename}})

    }
  }
}
