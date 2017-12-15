import { Injectable } from '@angular/core';

import {Promotion} from '../shared/promotion';

import { Observable } from 'rxjs/Observable';
import {Restangular, RestangularModule} from 'ngx-restangular';


import 'rxjs/add/operator/map';

@Injectable()
export class PromotionService {

  constructor( private restangular:  Restangular) { }

  getPromotions(): Observable <Promotion[]>{
  	return this.restangular.all('promotions').getList();
  } 

  getPromotion(id: number):Observable< Promotion>{
  	return this.restangular.one('promotions', id).get();
  }

  featuredPromotion(): Observable<Promotion>{
  	return this.restangular.all('promotions').getList({featured: true})
    .map(promotions => promotions = promotions[0])
  }


}
