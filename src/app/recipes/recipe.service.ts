import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Good Burger',
      'http://www.drodd.com/images15/food10.jpg',
      [
        new Ingredient("Meat", 2),
        new Ingredient("Break", 3)
      ]
    ),
    new Recipe(
      'Noodle',
      'Fried Noodls',
      'https://eat24hours.com/files/cuisines/v4/chinese.jpg?e24v=103?e24v=178?e24v=178',
      []
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
