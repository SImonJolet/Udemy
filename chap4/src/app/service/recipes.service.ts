import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id:'r1',
      title: 'Schnitzel', 
      imageUrl: 'https://www.foodiecrush.com/wp-content/uploads/2018/10/Pork-Schnitzel-foodiecrush.com-016-683x1024.jpg',
      ingredients: ['veau', 'chapelure', 'oeufs', 'farine', 'pomme de terre à frite']
    },
    {
      id:'r2',
      title: 'Spaghetti', 
      imageUrl: 'https://assets.afcdn.com/recipe/20180326/78158_w1024h768c1cx2736cy1824cxt0cyt0cxb5472cyb3648.jpg',
      ingredients: ['pate', 'sauce']
    }
  ]

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  };

  getRecipe(recipeId: string){
    return {
        ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }

  deteleRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe=> {
      return recipe.id !== recipeId;
    });
  }
}
