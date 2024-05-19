import { Injectable } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[]=[
    new Recipe(
      '1',
      'Spaghetti Carbonara',
      'assets/images/recipes/1.jpg',
      'A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
      '30 minutes',
      '2024-05-10',
      [
          new Ingredient('Spaghetti', '200', 'grams'),
          new Ingredient('Pancetta', '150', 'grams'),
          new Ingredient('Eggs', '3', 'pieces'),
          new Ingredient('Parmesan cheese', '50', 'grams'),
          new Ingredient('Black pepper', 'to taste', 'grams')
      ],
      ['Italian', 'Pasta'],
      [
          'Cook spaghetti according to package instructions.',
          'Meanwhile, cook pancetta in a pan until crispy.',
          'In a bowl, whisk together eggs and Parmesan cheese.',
          'Drain spaghetti and add it to the pan with pancetta. Remove from heat.',
          'Quickly add the egg mixture to the spaghetti, stirring constantly.',
          'Season with black pepper and serve immediately.'
      ],
      20
  ),
  new Recipe(
      '2',
      'Chicken Alfredo Pasta',
      'assets/images/recipes/2.jpg',
      'Creamy pasta dish with tender chicken, mushrooms, and garlic in a rich Alfredo sauce.',
      '45 minutes',
      '2024-05-09',
      [
          new Ingredient('Fettuccine', '300', 'grams'),
          new Ingredient('Chicken breast', '2', 'pieces'),
          new Ingredient('Mushrooms', '200', 'grams'),
          new Ingredient('Heavy cream', '1', 'cup'),
          new Ingredient('Parmesan cheese', '1/2 ', 'cup'),
          new Ingredient('Garlic', '3 cloves', 'pieces'),
          new Ingredient('Butter', '2', 'tablespoons'),
          new Ingredient('Salt', 'to taste', 'grams'),
          new Ingredient('Black pepper', 'to taste', 'grams')
      ],
      ['Italian', 'Pasta', 'Chicken'],
      [
          'Cook fettuccine according to package instructions.',
          'Season chicken breasts with salt and pepper, then cook in a skillet until browned and cooked through. Set aside.',
          'In the same skillet, melt butter and sauté garlic and mushrooms until tender.',
          'Stir in heavy cream and Parmesan cheese, simmer until sauce thickens.',
          'Slice chicken and add it back to the skillet, along with cooked fettuccine.',
          'Toss everything together until evenly coated in sauce. Serve hot.'
      ],
      30
  ),
  new Recipe(
      '3',
      'Caprese Salad',
      'assets/images/recipes/3.jpg',
      'A simple and refreshing salad made with fresh tomatoes, mozzarella cheese, basil, and balsamic glaze.',
      '15 minutes',
      '2024-05-08',
      [
          new Ingredient('Tomatoes', '2', 'pieces'),
          new Ingredient('Fresh mozzarella', '200', 'grams'),
          new Ingredient('Fresh basil leaves', '1', 'cup'),
          new Ingredient('Balsamic glaze', '2', 'tablespoons'),
          new Ingredient('Extra virgin olive oil', '2', 'tablespoons'),
          new Ingredient('Salt', 'to taste', 'grams'),
          new Ingredient('Black pepper', 'to taste', 'grams')
      ],
      ['Salad', 'Italian'],
      [
          'Slice tomatoes and fresh mozzarella into rounds.',
          'Arrange tomato and mozzarella slices on a plate, alternating with basil leaves.',
          'Drizzle with balsamic glaze and olive oil.',
          'Season with salt and pepper to taste.',
          'Serve immediately as a refreshing appetizer or side dish.'
      ],
      10
  ),
  new Recipe(
      '4',
      'Homemade Pizza',
      'assets/images/recipes/4.jpg',
      'Classic homemade pizza with tomato sauce, mozzarella cheese, pepperoni, and fresh basil.',
      '1 hour',
      '2024-05-07',
      [
          new Ingredient('Pizza dough', '1 ball', 'pieces'),
          new Ingredient('Tomato sauce', '1/2 ', 'cup'),
          new Ingredient('Mozzarella cheese', '200', 'grams'),
          new Ingredient('Pepperoni slices', '1 ', 'cup'),
          new Ingredient('Fresh basil leaves', '1/4 ', 'cup')
      ],
      ['Italian', 'Pizza'],
      [
          'Preheat oven to 475°F (245°C).',
          'Roll out pizza dough on a floured surface to desired thickness.',
          'Transfer dough to a pizza pan or baking sheet.',
          'Spread tomato sauce evenly over the dough, leaving a small border.',
          'Top with mozzarella cheese, pepperoni slices, and fresh basil leaves.',
          'Bake in preheated oven for 12-15 minutes or until crust is golden brown and cheese is bubbly.',
          'Slice and serve hot.'
      ],
      45
  ),
  new Recipe(
      '5',
      'Caesar Salad',
      'assets/images/recipes/5.jpg',
      'A classic Caesar salad with crisp romaine lettuce, garlic croutons, Parmesan cheese, and Caesar dressing.',
      '20 minutes',
      '2024-05-06',
      [
          new Ingredient('Romaine lettuce', '1 ', 'pieces'),
          new Ingredient('Garlic croutons', '1 ', 'cup'),
          new Ingredient('Parmesan cheese', '1/2 ', 'cup'),
          new Ingredient('Caesar dressing', '1/4 ', 'cup')
      ],
      ['Salad'],
      [
          'Wash and chop romaine lettuce into bite-sized pieces.',
          'In a large bowl, toss together romaine lettuce, garlic croutons, and grated Parmesan cheese.',
          'Drizzle with Caesar dressing and toss until evenly coated.',
          'Serve immediately as a side dish or add grilled chicken for a complete meal.'
      ],
      15
  ),
  new Recipe(
      '6',
      'Vegetable Stir Fry',
      'assets/images/recipes/6.jpg',
      'A healthy and colorful stir-fry made with a variety of fresh vegetables and a flavorful sauce.',
      '25 minutes',
      '2024-05-05',
      [
          new Ingredient('Broccoli florets', '2 ', 'cups'),
          new Ingredient('Bell peppers (assorted colors)', '1 ', 'cup'),
          new Ingredient('Carrots', '2', 'pieces'),
          new Ingredient('Snow peas', '1 ', 'cup'),
          new Ingredient('Onion', '1', 'piece'),
          new Ingredient('Garlic', '3 ', 'pieces'),
          new Ingredient('Ginger', '1 ', 'tablespoon'),
          new Ingredient('Soy sauce', '2 ', 'tablespoons'),
          new Ingredient('Sesame oil', '1 ', 'tablespoon'),
          new Ingredient('Honey', '1 ', 'tablespoon'),
          new Ingredient('Cornstarch', '1 ', 'teaspoon'),
          new Ingredient('Water', '1/4 ', 'cup')
      ],
      ['Asian', 'Vegetarian'],
      [
          'Heat sesame oil in a large skillet or wok over medium-high heat.',
          'Add minced garlic and ginger, sauté for 1 minute.',
          'Add vegetables (broccoli, bell peppers, carrots, snow peas, onion) and stir-fry until tender-crisp.',
          'In a small bowl, whisk together soy sauce, honey, cornstarch, and water to make the sauce.',
          'Pour the sauce over the vegetables and toss to coat evenly. Cook for another 2-3 minutes until the sauce thickens.',
          'Serve hot over cooked rice or noodles.'
      ],
      20
  ),
  new Recipe(
      '7',
      'Margarita Pizza',
      'assets/images/recipes/7.jpg',
      'A classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and olive oil.',
      '45 minutes',
      '2024-05-04',
      [
          new Ingredient('Pizza dough', '1 ', 'pieces'),
          new Ingredient('Tomato sauce', '1/2 ', 'cup'),
          new Ingredient('Fresh mozzarella', '200', 'grams'),
          new Ingredient('Fresh basil leaves', '1/4 ', 'cup'),
          new Ingredient('Extra virgin olive oil', '2 ', 'tablespoons')
      ],
      ['Italian', 'Pizza'],
      [
          'Preheat oven to 475°F (245°C).',
          'Roll out pizza dough on a floured surface to desired thickness.',
          'Transfer dough to a pizza pan or baking sheet.',
          'Spread tomato sauce evenly over the dough, leaving a small border.',
          'Tear fresh mozzarella into pieces and distribute evenly over the sauce.',
          'Top with fresh basil leaves.',
          'Drizzle olive oil over the pizza.',
          'Bake in preheated oven for 12-15 minutes or until crust is golden brown and cheese is bubbly.',
          'Slice and serve hot.'
      ],
      30
  ),
  new Recipe(
      '8',
      'Chocolate Chip Cookies',
      'assets/images/recipes/8.jpg',
      'Classic homemade chocolate chip cookies with a soft and chewy texture.',
      '25 minutes',
      '2024-05-03',
      [
          new Ingredient('All-purpose flour', '2 1/4 ', 'cups'),
          new Ingredient('Butter', '1 ', 'cup'),
          new Ingredient('Granulated sugar', '3/4 ', 'cup'),
          new Ingredient('Brown sugar', '3/4 ', 'cup'),
          new Ingredient('Eggs', '2', 'pieces'),
          new Ingredient('Vanilla extract', '1 ', 'teaspoon'),
          new Ingredient('Baking soda', '1 ', 'teaspoon'),
          new Ingredient('Salt', '1/2 ', 'teaspoon'),
          new Ingredient('Chocolate chips', '2 ', 'cups')
      ],
      ['Dessert', 'Cookies'],
      [
          'Preheat oven to 375°F (190°C).',
          'In a bowl, cream together butter, granulated sugar, and brown sugar until smooth.',
          'Beat in eggs one at a time, then stir in vanilla extract.',
          'Combine flour, baking soda, and salt; gradually add to the creamed mixture and mix well.',
          'Stir in chocolate chips.',
          'Drop dough by rounded spoonfuls onto ungreased cookie sheets.',
          'Bake for 8 to 10 minutes or until golden brown.',
          'Allow cookies to cool on baking sheet for 5 minutes before transferring to wire racks to cool completely.'
      ],
      15
  ),
  new Recipe(
      '9',
      'Chicken Tacos',
      'assets/images/recipes/9.jpg',
      'Delicious and flavorful chicken tacos with tender chicken, fresh salsa, and creamy guacamole.',
      '30 minutes',
      '2024-05-02',
      [
          new Ingredient('Chicken breasts', '2', 'pieces'),
          new Ingredient('Taco seasoning', '1 ', 'packet'),
          new Ingredient('Flour tortillas', '8', 'pieces'),
          new Ingredient('Lettuce', '1 ', 'cup'),
          new Ingredient('Tomatoes', '2', 'pieces'),
          new Ingredient('Onion', '1', 'piece'),
          new Ingredient('Avocado', '1', 'piece'),
          new Ingredient('Lime', '1', 'piece'),
          new Ingredient('Cilantro', '1/4 ', 'cup'),
          new Ingredient('Sour cream', '1/2 ', 'cup')
      ],
      ['Mexican', 'Tacos', 'Chicken'],
      [
          'Season chicken breasts with taco seasoning.',
          'Grill or cook chicken until fully cooked, then shred with a fork.',
          'Warm tortillas according to package instructions.',
          'Prepare toppings: shred lettuce, dice tomatoes and onion, slice avocado, chop cilantro, and cut lime into wedges.',
          'Assemble tacos: fill each tortilla with shredded chicken and desired toppings.',
          'Serve with lime wedges and sour cream on the side.'
      ],
      20
  ),
  new Recipe(
      '10',
      'Vegetable Soup',
      'assets/images/recipes/10.jpg',
      'Healthy and comforting vegetable soup with a variety of fresh vegetables and flavorful broth.',
      '1 hour',
      '2024-05-01',
      [
          new Ingredient('Carrots', '2', 'pieces'),
          new Ingredient('Celery stalks', '2', 'pieces'),
          new Ingredient('Onion', '1', 'piece'),
          new Ingredient('Potatoes', '2', 'pieces'),
          new Ingredient('Tomatoes', '2', 'pieces'),
          new Ingredient('Green beans', '1 ', 'cup'),
          new Ingredient('Vegetable broth', '4 ', 'cups'),
          new Ingredient('Bay leaves', '2', 'pieces'),
          new Ingredient('Garlic', '3 ', 'pieces'),
          new Ingredient('Salt', 'to taste', 'grams'),
          new Ingredient('Black pepper', 'to taste', 'grams'),
          new Ingredient('Olive oil', '2 ', 'tablespoons')
      ],
      ['Soup', 'Vegetarian'],
      [
          'Heat olive oil in a large pot over medium heat.',
          'Add minced garlic, diced onion, carrots, and celery. Cook until vegetables are tender.',
          'Add diced potatoes, tomatoes, green beans, vegetable broth, bay leaves, salt, and black pepper.',
          'Bring soup to a boil, then reduce heat and simmer for 30-40 minutes or until vegetables are cooked through.',
          'Taste and adjust seasoning as needed.',
          'Remove bay leaves before serving.'
      ],
      30
  )
  ];

  constructor() { }
  getRecipes(){
    return this.recipes;
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
}
