import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Recipe } from './models';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  allRecipesURL = '/api/recipes';
  recipeByIdURL = '/api/recipe';
  constructor(private http: HttpClient) {}

  // Gets all recipes from the server as array containing all RecipeSummary
  getAllRecipes(): Promise<any> {
    const httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return lastValueFrom(
      this.http.get(this.allRecipesURL, { headers: httpHeaders })
    );
  }

  // Get a single recipe from the server using the given recipeId
  getRecipe(recipeId: string): Promise<any> {
    const httpHeaders = new HttpHeaders().set('Accept', 'application/json');
    return lastValueFrom(
      this.http.get(`${this.recipeByIdURL}/${recipeId}`, {
        headers: httpHeaders,
      })
    );
  }

  // Saves a recipe to the server
  saveRecipe(recipe: Recipe): Promise<any> {
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return lastValueFrom(
      this.http.post(`${this.recipeByIdURL}`, recipe, {
        headers: httpHeaders,
      })
    );
  }
}
