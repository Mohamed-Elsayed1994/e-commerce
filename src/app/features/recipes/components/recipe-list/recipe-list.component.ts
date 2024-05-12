import { Component } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService){
    this.recipes = this.recipeService.getRecipes();
  }

}
