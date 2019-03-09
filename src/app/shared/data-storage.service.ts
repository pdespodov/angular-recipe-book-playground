import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataStorageService {
    constructor(private httpClient: HttpClient, 
        private recipeService: RecipeService,
        private authService: AuthService) {

    }

    storeRecipes() {
        let token = this.authService.getToken();

        return this.httpClient.put("https://ng-recipe-book-6cb21.firebaseio.com/recipes.json?auth=" + token, 
            this.recipeService.getRecipes());
    }

    getRecipes() {
        let token = this.authService.getToken();

        return this.httpClient.get<Recipe[]>("https://ng-recipe-book-6cb21.firebaseio.com/recipes.json?auth=" + token)
            .map((recipes) => {
                for(let recipe of recipes) {
                    if(!recipe["ingredients"]) {
                        recipe["ingredients"] = [];
                    }
                }

                return recipes;
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);               
            })
    }
}