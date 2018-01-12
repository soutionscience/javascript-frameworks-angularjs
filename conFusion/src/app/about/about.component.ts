import { Component, OnInit, Inject} from '@angular/core';

import {Leader} from '../shared/leader'
import {LeadershipService} from '../services/leadership.service';
import {flyInOut, expand} from '../animations/app.animations';
import {Restangular, RestangularModule} from 'ngx-restangular';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
   host:{
    '[@flyInOut]': 'true',
    'style': 'display: block'

  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

	leader: Leader[]

  constructor( private leadershipService: LeadershipService, 
    @Inject('BaseURL') private BaseUrl) { }

  ngOnInit() {
   this.leadershipService.getLeaders().subscribe(leader => this.leader = leader)
  }

}
