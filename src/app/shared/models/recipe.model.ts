import { Ingredient } from "./ingredient.model";

export class Recipe {
    constructor(
        public id: string,
        public name: string,
        public imageUrl: string,
        public description: string,
        public readTime: string,
        public date: string,
        public ingrediants: Ingredient[],
        public categories: string[],
        public instructions: string[],
        public cookingTime: number
    ){}
}