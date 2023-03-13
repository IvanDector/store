import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string = '';
  imagenDefault='./assets/images/defaulf.png';
  
  imgError(){
    this.img= this.imagenDefault;
  }
  imgLoaded(){
    console.log('Loaded');
  }


}
