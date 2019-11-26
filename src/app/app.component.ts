import { Component } from "@angular/core";
import { PizzasService, ToppingsService } from "./products/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "uc-ngrx-store";

  //Verify if the in-memory-data service works
  /*
  constructor(
    private pizzasService: PizzasService,
    private toppingsService: ToppingsService
  ) {
    this.pizzasService.getPizzas().subscribe(pizzas => {
      console.log(pizzas);
    });
    this.toppingsService.getToppings().subscribe(toppings => {
      console.log(toppings);
    });
  }
  */
}
