import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.getRecipe(this.route.snapshot.params['recipeId']);
  }

  getRecipe(recipeId: string) {
    this.recipeService
      .getRecipe(recipeId)
      .then((recipe) => {
        this.recipe = recipe as Recipe;
      })
      .catch((error) => {
        this.goBack();
        alert('No recipe found with the given id!');
      });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
