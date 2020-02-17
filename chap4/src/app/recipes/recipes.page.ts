import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id:'r1',
      title: 'Schnitzel', 
      imageUrl: 'https://www.foodiecrush.com/wp-content/uploads/2018/10/Pork-Schnitzel-foodiecrush.com-016-683x1024.jpg',
      ingredients: ['veau, chapelure, oeufs, farine, pomme de terre à frite']
    },
    {
      id:'r2',
      title: 'Spaghetti', 
      imageUrl: 'https://assets.afcdn.com/recipe/20180326/78158_w1024h768c1cx2736cy1824cxt0cyt0cxb5472cyb3648.jpg',
      ingredients: ['pate, sauce']
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
