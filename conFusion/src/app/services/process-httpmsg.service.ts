import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import { Http, Response} from '@angular/http'


@Injectable()
export class ProcessHttpmsgService {

  constructor() { }
  public extracctData(res: Response){
  	let body = res.json();
  	return body || { };
  }

}