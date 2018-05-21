import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-modal'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesList: Recipe[] =  [
    new Recipe('burger', 
    'http://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg', 
    'this is a tasty burger'),
    new Recipe('chats', 
    'http://1.bp.blogspot.com/_-Uj0_1V5i3o/TPK_Lh3ncHI/AAAAAAAACWA/kx9j0yfY4y4/s400/IMG_7926+copy.jpg', 
    'this is a tasty chat'),
    new Recipe('Fried rice', 
    'http://www.cbc.ca/bestrecipes/content/images/recipes/_full/Chinese_Shrimp_Fried_Rice_IMG_8133-thumb-960x541-270654.jpg', 
    'this is a chinese delicacy')
  ];

  constructor() { }

  ngOnInit() {
  }

}
