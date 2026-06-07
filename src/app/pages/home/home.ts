import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../shared/components/card/card";

@Component({
  selector: 'app-home',
  imports: [Footer, Navbar, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
