import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecpeDetialsComponent } from './components/recpe-detials/recpe-detials.component';

const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: ':id',component: RecpeDetialsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
