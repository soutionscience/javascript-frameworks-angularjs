import { Injectable } from '@angular/core';
import {Feedback} from '../shared/feedback'
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class FeedbackService {

  constructor(private restangular : Restangular) { }

  getFeedback(): Observable<Feedback[]>{
  	return this.restangular.all('feedback').getList()

  }
  postFeedback(feedback): Observable<Feedback[]>{
  	return this.restangular.all('feedback').post(feedback)
  	 .map(data => {console.log("responding with ", data); return data},data2=> {console.log("withot error then")})
  	// .then(function(resp){
  	// 	console.log("id", resp.id)

  		
  	// },
  	// function(){
  	// 	console.log(" there was an error saving")
  	// })
  }

}
