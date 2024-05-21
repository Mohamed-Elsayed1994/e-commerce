import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecpeDetialsComponent } from './components/recpe-detials/recpe-detials.component';


@NgModule({
  declarations: [ RecipeListComponent, RecpeDetialsComponent,],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
