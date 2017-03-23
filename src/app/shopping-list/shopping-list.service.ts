import { Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient";

@Injectable()
export class ShoppingListService {
  private itmes: Ingredient[] = []

  constructor() { }

  getItems() {
    return this.itmes;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.itmes, items);
  }

}
