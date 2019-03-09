import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params["id"]);

    this.recipe = this.recipeService.getRecipes[this.id];

    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];

      this.recipe = this.recipeService.getRecipes()[this.id];
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngedientsToShoppingList(this.recipe.ingredients);
  }

  goToEditRecipe() {
    this.router.navigate(["./edit"], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);

    this.router.navigate(["/recipes"]);
  }

}
