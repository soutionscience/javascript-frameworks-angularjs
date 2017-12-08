import { Component, OnInit, Input} from '@angular/core';
import { Dish } from '../shared/dish'

import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'

import {DishService} from '../services/dish.service'
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

	// @Input()
	dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  constructor( private dishService: DishService,
  	          private route: ActivatedRoute,
  	          private location: Location) { }

  ngOnInit() {

  this.dishService.getDishIds().subscribe(id =>this.dishIds =id)

  	this.route.params
    .switchMap((params: Params) => this.dishService.getDish(+params['id']))
    .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id);});
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void{
  	this.location.back();
  }

}