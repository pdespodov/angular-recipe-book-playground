import {Ingredient} from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Meat", 45),
        new Ingredient("Flour", 3)
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;

        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);

        this.ingredientsChanged.next(this.ingredients.slice());
    }

    public addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);

        this.ingredientsChanged.next(this.ingredients.slice())
    }

    public addIngredients(ingredients: Ingredient[]){
        //ingredients.map((i) => this.addIngredient(i));
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}