import { Component, OnInit , Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import {flyInOut, expand} from '../animations/app.animations'

import{ DishService} from '../services/dish.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block'

  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class MenuComponent implements OnInit {
 dishes: Dish[]
tester : string;
errorMess: string;

  constructor (private dishService : DishService,
    @Inject('BaseURL') private BaseUrl) { }

  ngOnInit() {
    this.tester = "23";
    console.log(this.tester)
    console.log("calling on init")
   this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes, errmess => this.errorMess = <any> errmess);
  }



}
