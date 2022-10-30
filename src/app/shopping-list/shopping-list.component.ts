import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Bananas', 3),
  ];

  constructor() {}

  ngOnInit(): void {}
}
