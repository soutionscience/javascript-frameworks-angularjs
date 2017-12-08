import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

import{ DishService} from '../services/dish.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
 dishes: Dish[]
tester : string;
  selectedDish: Dish;

  constructor (private dishService : DishService) { }

  ngOnInit() {
    this.tester = "23";
    console.log(this.tester)
    console.log("calling on init")
   this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes);
  }

    onSelect(dish: Dish){
     
    console.log("clicked")
    console.log(this.tester)
      this.selectedDish = dish;

    }

}
