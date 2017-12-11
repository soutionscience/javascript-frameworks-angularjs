import { Injectable } from '@angular/core';

import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';

@Injectable()
export class LeadershipService {

  constructor() { }

  getLeaders(): Leader[]{
  	return LEADERS;

  }

  getLeader(id:number): Leader{
  	return LEADERS.filter((leader)=>(leader.id === id))[0];

  }
  featuredLeader(): Leader{
  	return LEADERS.filter((leader)=>(leader.featured))[0];
  }

}
