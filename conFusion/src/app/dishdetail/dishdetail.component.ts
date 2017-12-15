import { Component, OnInit, Inject} from '@angular/core';
import { Dish } from '../shared/dish'

import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'

import {DishService} from '../services/dish.service'
import 'rxjs/add/operator/switchMap';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { visibility, flyInOut, expand} from '../animations/app.animations'



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host:{
      '[@flyInOut]': 'true',
    'style': 'display: block'
    
  },
  animations: [
  visibility(),
  flyInOut(),
  expand()
    ]
})
export class DishdetailComponent implements OnInit {

	commentForm: FormGroup;
	dish: Dish;
  dishcopy = null;
  dishIds: number[];
  prev: number;
  next: number;
  //date: Date;
  date = Date.now();
  visibility = 'shown';


  formErrors ={
   'author': '',
   'rating': '',
   'comment': '',
   'date':''

  }

  validationMessages ={
    'author':{
       'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'comment':{
       'required':      'comment is required.',
      'minlength':     'comment must be at least 2 characters long.'
    }
  }

  constructor( private dishService: DishService,
  	          private route: ActivatedRoute,
  	          private location: Location,
              private fb: FormBuilder,
               @Inject('BaseURL') private BaseUrl)
               {
               this.createForm()
               }


               createForm(){
                 
                  console.log(this.date)

                 this.commentForm = this.fb.group({
                   author: ['', [Validators.required, Validators.maxLength(2), Validators.maxLength(25)]],
                   rating: ['5'],
                   comment:['', [Validators.required, Validators.minLength(2)]],
                   date: ['']

                 })


                  this.commentForm.valueChanges
            .subscribe(data => this.onValueChange(data))



               }

               onValueChange(data?: any) { 
                 if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  ngOnInit() {

  this.dishService.getDishIds().subscribe(id =>this.dishIds =id)

  	this.route.params
    .switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishService.getDish(+params['id'])})
    .subscribe(dish => {this.dish = dish; this.dishcopy=dish; this.setPrevNext(dish.id); this.visibility = 'shown'; });
  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void{
  	this.location.back();
  }
  onSubmit(){
    console.log(this.commentForm.value);
    this.commentForm.value.date = this.date;
    this.dishcopy.comments.push(this.commentForm.value)
    this.dishcopy.save()
     .subscribe(dish => { this.dish = dish; console.log(this.dish); });
    this.commentForm.reset({
      author:'',
      rating:'',
      comment:'',
      date: ''

    })
  }

}