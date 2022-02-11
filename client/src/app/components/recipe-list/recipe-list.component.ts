import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeSummary } from 'src/app/models';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: RecipeSummary[] = [
    { id: '1', name: 'Bread' },
    { id: '2', name: 'Roast Beef' },
  ];
  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {}

  navigateToRecipe(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }

  getRecipes() {}
}
