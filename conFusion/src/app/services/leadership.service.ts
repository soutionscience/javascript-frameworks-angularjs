import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import { Observable } from 'rxjs/Observable';
import {Restangular, RestangularModule} from 'ngx-restangular';


import 'rxjs/add/operator/map';

@Injectable()
export class LeadershipService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable< Leader[]>{
  	return this.restangular.all('leaders').getList()

  }

  getLeader(id:number): Observable< Leader>{
  	return this.restangular.one('leaders', id).get()

  }
  featuredLeader(): Observable<Leader>{
  	return this.restangular.all('leaders').getList({featured: true})
    .map(leaders => leaders[0])
  }

}
