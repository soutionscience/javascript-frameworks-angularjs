import { Component, OnInit, Inject } from '@angular/core';

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
    private leadershipService: LeadershipService,
     @Inject('BaseURL') private BaseUrl) { }

  ngOnInit() {

  this.dishService.featuredDish().subscribe(dish=>{
    this.dish = dish;
  })
  	this.promotionService.featuredPromotion().subscribe(promotion=>{
      this.promotion= promotion;
    });
   this.leadershipService.featuredLeader().subscribe(leader=>{
     this.leader = leader;
   })
  }

}
