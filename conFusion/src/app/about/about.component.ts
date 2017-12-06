import { Component, OnInit } from '@angular/core';

import {Leader} from '../shared/leader'
import {LeadershipService} from '../services/leadership.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	leader: Leader[]

  constructor( private leadershipService: LeadershipService) { }

  ngOnInit() {
    this.leader =this.leadershipService.getLeaders();
  }

}
