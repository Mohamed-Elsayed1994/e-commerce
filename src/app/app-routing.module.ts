import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { RecipeListComponent } from './features/recipes/components/recipe-list/recipe-list.component';
import { AboutComponent } from './info/components/about/about.component';
import { ContactComponent } from './info/components/contact/contact.component';
import { RecpeDetialsComponent } from './features/recipes/components/recpe-detials/recpe-detials.component';
import { ProductDetialsComponent } from './features/product/components/product-detials/product-detials.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id',component: ProductDetialsComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/:id',component: RecpeDetialsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
