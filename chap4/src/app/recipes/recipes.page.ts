import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipes.model'
import { RecepiesService } from '../recepies/recepies.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  
  constructor(
    private recepiesService: RecepiesService
  ) { }



  ngOnInit() {
    console.log("simon");
    
    this.recipes = this.recepiesService.getAllRecipes();
  }

}