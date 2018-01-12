import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import{ Feedback , ContactType} from '../shared/feedback';
import {flyInOut} from '../animations/app.animations'
import {FeedbackService } from '../services/feedback.service';
import { Observable } from 'rxjs/Observable';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
    host:{
    '[@flyInOut]': 'true',
    'style': 'display: block'

  },
  animations: [
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {
	feedbackForm: FormGroup;
	 feedback: Feedback;
   feedbackCopy  = null;
   serverFeedback: Feedback[];
	 contactType = ContactType;
   submited = false;
   spinner = true;
   displayContent = true;
   timer: Observable<any>;
   formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };
  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };


  constructor( private fb: FormBuilder, 
    private feedbackService: FeedbackService, 
     @Inject('BaseURL') private BaseUrl) { 
this.createForm();
  }

  ngOnInit() {

    // this.feedbackService.getFeedback()
    // .subscribe(feedback=> {this.feedbackCopy=feedback;})

  }
  createForm(){

  	this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
  	})


    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChange(data));
    this.onValueChange();

  }
  onValueChange(data?: any){
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
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

    myTimeOut(){
     return setTimeout(()=>{    //<<<---    using ()=> syntax
        this.serverFeedback = null;
        this.resetFeedbackForm();
        this.submited = false;
   },5000);
         
    }
    resetFeedbackForm(){
      return  	this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum:'',
        email:'',
        agree: false,
        contacttype:'None',
        message:''
      });
    }
    
  onSubmit(){
  	this.feedback = this.feedbackForm.value;
    this.submited = true;
    this.spinner = false;
    
    this.feedbackService.postFeedback(this.feedback).subscribe(mydata=> {
      this.serverFeedback = mydata; this.spinner = true; this.myTimeOut()
});


    
 

  }

}
