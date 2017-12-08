import { Injectable } from '@angular/core';

import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable()
export class LeadershipService {

  constructor() { }

  getLeaders(): Promise< Leader[]>{
  	return Promise.resolve(LEADERS);

  }

  getLeader(id:number): Promise< Leader>{
  	return Promise.resolve(LEADERS.filter((leader)=>(leader.id === id))[0]);

  }
  featuredLeader(): Promise<Leader>{
  	return Promise.resolve(LEADERS.filter((leader)=>(leader.featured))[0]);
  }

}
