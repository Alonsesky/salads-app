import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  // Variable que contiene estado del menu de navbar
  menuOpen = false;
  // MENU para dispositivo movil para desplegar opciones del navbar
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.classList.add('overflow-hidden');
      this.isScrolledMovil.set(true);

    } else {
      document.body.classList.remove('overflow-hidden');
      this.isScrolledMovil.set(false);
    }
  }

  //Variable que contiene el estado del scroll
  isScrolled = signal(false);
  isScrolledMovil = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
    this.isScrolledMovil.set(window.scrollY > 0);
  }

}
