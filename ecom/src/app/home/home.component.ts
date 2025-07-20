import { Component ,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
   ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, 2500);
  }
}
