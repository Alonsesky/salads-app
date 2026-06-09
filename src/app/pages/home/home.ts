import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../shared/components/card/card";
import { Nutri } from "../../components/nutri/nutri";

@Component({
  selector: 'app-home',
  imports: [Footer, Navbar, Card, Nutri],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  @ViewChild('sliderTrack')
  sliderTrack!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  totalSlides = 2;

  ngAfterViewInit() {
    this.totalSlides =
      this.sliderTrack.nativeElement.children.length;

    this.startAutoSlide();
  }

  nextSlide() {
    this.currentIndex += 2;

    if (this.currentIndex >= this.totalSlides) {
      this.currentIndex = 0;
    }

    this.sliderTrack.nativeElement.style.transform =
      `translateX(-${this.currentIndex * 50}%)`;
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }
}
