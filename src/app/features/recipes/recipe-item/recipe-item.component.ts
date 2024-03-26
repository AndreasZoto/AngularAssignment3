import { Component } from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  recipes: RecipeModel[] = [
    {name: 'Recipe One', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Recipe Two', description: 'Some description for Recipe Two', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Recipe Three', description: 'Some description for Recipe Three', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Recipe Four', description: 'Some description for Recipe Four', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Recipe Five', description: 'Some description for Recipe Five', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'}
  ];
}
