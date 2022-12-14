import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple recipe',
      'https://therecipecritic.com/wp-content/uploads/2021/03/bakedrigatoni-368x463.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple recipe',
      'https://therecipecritic.com/wp-content/uploads/2021/03/bakedrigatoni-368x463.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple recipe',
      'https://therecipecritic.com/wp-content/uploads/2021/03/bakedrigatoni-368x463.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
