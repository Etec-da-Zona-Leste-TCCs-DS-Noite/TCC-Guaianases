import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Menu } from './menu/menu'
import { Mapa } from './mapa/mapa';
import { HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule
]

@Component({
  selector: 'app-root',
  imports: [Menu, Mapa, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
