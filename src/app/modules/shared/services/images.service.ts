import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  getPathImages(){
    let images=[];
    for (let i = 1; i <32; i++) {
      images.push(`assets/images/0 (${i}).jpeg`);
    }
    return images;
  }
}
