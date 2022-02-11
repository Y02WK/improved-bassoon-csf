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
  recipeList: RecipeSummary[] = [];
  constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  navigateToRecipe(recipeId: string) {
    this.router.navigate(['/recipe', recipeId]);
  }

  // TODO: Move to RecipeService
  private getRecipes() {
    this.recipeService.getAllRecipes().then((recipeList) => {
      this.recipeList = recipeList.map(
        (recipe: { id: any; title: any }) =>
          ({ id: recipe.id, title: recipe.title } as RecipeSummary)
      );
    });
  }
}
