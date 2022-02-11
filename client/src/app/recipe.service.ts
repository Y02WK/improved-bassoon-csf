import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  allRecipesURL = 'http://localhost:8080/api/recipes';
  recipeByIdURL = 'http://localhost:8080/api/recipe';
  constructor(private http: HttpClient) {}

  // Gets all recipes from the server as array containing all RecipeSummary
  getAllRecipes(): Promise<any> {
    // TODO: Add headers to accept application/json
    return lastValueFrom(this.http.get(this.allRecipesURL));
  }

  // Get a single recipe from the server using the given recipeId
  getRecipe(recipeId: string): Promise<any> {
    // TODO: Add headers to accept application/json
    return lastValueFrom(this.http.get(`${this.recipeByIdURL}/${recipeId}`));
  }
}
