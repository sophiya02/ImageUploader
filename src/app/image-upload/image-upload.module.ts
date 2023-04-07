import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ImageUploadedComponent } from './image-uploaded/image-uploaded.component';
import { ImageUploadingComponent } from './image-uploading/image-uploading.component';
import { ImageUploadComponent } from './image-upload.component';

const routes: Routes = [
  {
    path:'',
    component: ImageUploadComponent
  },
  {
    path:'image-upload/image-uploaded',
    component: ImageUploadedComponent
  },
  {
    path:'image-upload/image-uploading',
    component: ImageUploadingComponent
  },
  {path: 'image-upload', redirectTo:'/', pathMatch:'full'}

];

@NgModule({
  declarations: [
    ImageUploadedComponent,
    ImageUploadingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ]
})
export class UploadImageModule { }
