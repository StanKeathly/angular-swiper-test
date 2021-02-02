import { Component, ViewChild } from "@angular/core";
import { SwiperContainer } from "./swiper/swiper.component";

declare var Swiper: any;

@Component({
  selector: "my-app",
  template: `
    <swiper-container [options]="swipeOptions" [pager]="true" #homeSlide>
      <swiper-slide>
        <img src="https://source.unsplash.com/random/512x512" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://source.unsplash.com/random/512x512?nature" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://source.unsplash.com/random/512x512?portrait" />
      </swiper-slide>
    </swiper-container>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular with Swiper";
  @ViewChild("homeSlide", { static: true }) public homeSlide: SwiperContainer;

  public swipeOptions = {
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  constructor() {}

  goToNextPage() {
    this.homeSlide.swiper.slideNext();
  }
}
