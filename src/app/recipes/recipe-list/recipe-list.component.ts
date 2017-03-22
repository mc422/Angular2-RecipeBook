import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger', 'Good Burger', 'http://www.drodd.com/images15/food10.jpg', []),
    new Recipe('Noodle', 'Fried Noodls', 'https://eat24hours.com/files/cuisines/v4/chinese.jpg?e24v=103?e24v=178?e24v=178', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
