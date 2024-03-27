import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: `<!-- This article element represents and entire listing -->
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title"><!-- car make and model--></p>
        <hr />
        <p class="detail">
          <span>Year</span>
          <span><!-- year --></span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span><!-- transmission --></span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span><!-- miles --></span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span><!-- price --></span>
        </p>
      </section>
    </article>
    <!-- end car listing markup -->`,
  styles: ``,
})
export class ListingComponent {
  @Input({ required: true }) car!: Car;
}
