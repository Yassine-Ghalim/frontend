import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  email:any;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
        this.email = params.get('email');
    });
}

  getImagePath(): string {
    // Supposons que les images sont stockées dans un dossier "assets/images" avec le format nommé comme "product_id.jpg"
    return `assets/img/img$.jpg`;
  }

}
