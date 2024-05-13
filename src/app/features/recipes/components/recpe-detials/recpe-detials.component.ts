import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recpe-detials',
  templateUrl: './recpe-detials.component.html',
  styleUrl: './recpe-detials.component.css'
})
export class RecpeDetialsComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

}
