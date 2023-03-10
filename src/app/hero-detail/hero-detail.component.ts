import { Component, Input } from '@angular/core';
import { Hero } from '../heroes.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  @Input() //decorator que permite o recebimento de valores de forma do component
  hero?: Hero;
}
