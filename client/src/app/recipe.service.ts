import { RecipeSummary } from './models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  allRecipesURL = '';
  constructor(private http: HttpClient) {}

  // Gets all recipes from the server as array containing all RecipeSummary
  getAllRecipes(): Promise<any> {
    return lastValueFrom(this.http.get(this.allRecipesURL));
  }
}
