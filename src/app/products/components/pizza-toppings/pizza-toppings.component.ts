import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { Topping } from "../../models/topping.model";

@Component({
  selector: "pizza-toppings",
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pizza-toppings">
      <div
        class="pizza-toppings-item"
        *ngFor="let topping of toppings"
        (click)="selectTopping(topping)"
        [class.active]="existsInToppings(topping)"
      >
        <img
          src="../../../../assets/img/toppings/singles/{{ topping.name }}.svg"
        />
        {{ topping.name }}
      </div>
    </div>
  `
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  @Input() toppings: Topping[] = [];

  value: Topping[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Topping[]) {
    this.value = value;
  }
  selectTopping(topping: Topping) {
    if (this.existsInToppings(topping)) {
      this.value = this.value.filter(item => item.id !== topping.id);
    } else {
      this.value = [...this.value, topping];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }
  existsInToppings(topping: Topping) {
    return this.value.some(val => val.id === topping.id);
  }
}
