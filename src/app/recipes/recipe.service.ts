import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class RecipeService {

    recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {

    }

    private recipes: Recipe[] = [
        new Recipe("Doner", "Lamb doner", 
            "http://www.1001recepti.com/images/photos/recipes/size_5/domashen-arabski-duner-s-agneshko-meso-1-[3148].jpg",
            [
                new Ingredient("Lamb Meat", 2),
                new Ingredient("Bread", 1)
            ]),
        new Recipe("Musaka", "Tasty musaka", "https://www.bonapeti.bg/uploads/recipes/rec16463/recipe_image0_540x405_147738720631.jpg",
        [
            new Ingredient("Potatoes", 5),
            new Ingredient("Chopped meat", 10)
        ])

    ];

    public setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;

        this.recipesChanged.next(this.recipes.slice());
    }

    public getRecipes() {
        return this.recipes.slice();
    }

    public getRecipe(index: number) {
        return this.recipes[index];
    }

    public addIngedientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    public addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);

        this.recipesChanged.next(this.recipes.slice());
    }

    public updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;

        this.recipesChanged.next(this.recipes.slice());
    }

    public deleteRecipe(index: number) {
        this.recipes.splice(index, 1);

        this.recipesChanged.next(this.recipes.slice());
    }
}