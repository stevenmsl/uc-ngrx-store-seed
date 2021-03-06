import { Component, OnInit } from "@angular/core";
import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a class="btn btn__ok" routerLink="./new">
          New Pizza
        </a>
        <!--
        <button type="button" class="btn btn__ok" (click)="test()">
          Test
        </button>
        -->
      </div>
      <div class="products__list">
        <div *ngIf="!pizzas?.length">
          No pizzas, add one to get started.
        </div>
        <pizza-item *ngFor="let pizza of pizzas" [pizza]="pizza"> </pizza-item>
      </div>
    </div>
  `
})
export class ProductsComponent implements OnInit {
  pizzas: Pizza[];
  constructor(private pizzaService: PizzasService) {}

  ngOnInit() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    });
  }
  test() {
    this.pizzaService.getPizzas().subscribe(pizzas => {
      console.log(pizzas);
    });
  }
}
