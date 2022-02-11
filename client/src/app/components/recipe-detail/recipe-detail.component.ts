import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeId!: string;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get recipeId from route
    this.recipeId = this.route.snapshot.params['recipeId'];
  }
}
