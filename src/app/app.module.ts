import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

// import { SwiperComponent } from './swiper/swiper.component';

import { SwiperContainer, SwiperSlide } from "./swiper/swiper.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SwiperContainer, SwiperSlide],
  bootstrap: [AppComponent]
})
export class AppModule {}
