import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  slidesStore = [
    {
      id:"1",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    },
    {
      id:"2",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    },
        {
      id:"3",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    },
    {
      id:"4",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    },
    {
      id:"5",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    },
    {
      id:"6",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    },
    {
      id:"7",
      title:"a title",
      src:"../../assets/Cella brand logo_transparent.png",
      alt:"batteries"
    }
  ]
// brand names


  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptionsTwo: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}

