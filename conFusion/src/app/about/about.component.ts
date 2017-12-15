import { Component, OnInit } from '@angular/core';

import {Leader} from '../shared/leader'
import {LeadershipService} from '../services/leadership.service';
import {flyInOut} from '../animations/app.animations'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
   host:{
    '[@flyInOut]': 'true',
    'style': 'display: block'

  },
  animations: [
    flyInOut()
  ]
})
export class AboutComponent implements OnInit {

	leader: Leader[]

  constructor( private leadershipService: LeadershipService) { }

  ngOnInit() {
   this.leadershipService.getLeaders().subscribe(leader => this.leader = leader)
  }

}
