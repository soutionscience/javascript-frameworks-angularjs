import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';
// import{ DISHES} from '../shared/dishes';
import {Promotion} from '../shared/promotion';
// import {PROMOTIONS} from '../shared/promotions'
import {Leader} from '../shared/leader'


import { DishService} from '../services/dish.service';
import { PromotionService} from '../services/promotion.service';
import { LeadershipService} from '../services/leadership.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	dish: Dish;
	promotion: Promotion;
  leader: Leader;


  constructor(private dishService: DishService, 
  	private promotionService : PromotionService,
    private leadershipService: LeadershipService) { }

  ngOnInit() {

  	this.dish = this.dishService.featuredDish();
  	this.promotion = this.promotionService.featuredPromotion();
    this.leader = this.leadershipService.featuredLeader();
  }

}
