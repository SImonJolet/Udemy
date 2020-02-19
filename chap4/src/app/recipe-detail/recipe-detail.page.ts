import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../service/recipes.service';
import { Recipe } from '../recipes/recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activitedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activitedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['/recipes']);
        return;
      }else {
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      }
    });

    
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Êtes-vous sûr ??',
      message: 'Vraiment vraiment vraiment sûr ?? Pas de regrets ?',
      buttons: [
        {
          text:`Noooope, je change d'avis, t'as bien fait de demander`,
          role:'cancel'
        },
        {
          text: 'Supprimer je te dis !!',
          handler: ()=> {
            this.recipesService.deteleRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
    ]
    })
   .then(alertEl => {
     alertEl.present();
   })
  }
}
