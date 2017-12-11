import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import{ Feedback , ContactType} from '../shared/feedback'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	feedbackForm: FormGroup;
	 feedback: Feedback;
	 contactType = ContactType;
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


  constructor( private fb: FormBuilder) { 
this.createForm();
  }

  ngOnInit() {
  }
  createForm(){

  	this.feedbackForm = this.fb.group({
  		firstname: ['', [Validators.minLength(3), Validators.required, Validators.maxLength(25)]],
  		lastname: ['', [Validators.minLength(3), Validators.required, Validators.maxLength(25)]],
  		telnum: ['', [Validators.required, Validators.pattern]],
  		email:['', [Validators.email, Validators.required, ]],
  		agree: false,
  		contacttype: 'None',
  		message: '',
  	})


    this.feedbackForm.valueChanges
    .subscribe(data => this.onValueChange(data));
    //this.onValueChange();

  }
  onValueChange(data?: any){

  }
  onSubmit(){
  	this.feedback = this.feedbackForm.value;
  	console.log(this.feedback);
  	this.feedbackForm.reset({
  		firstname: '',
  		lastname: '',
  		telnum:'',
  		email:'',
  		agree: false,
  		contacttype:'None',
  		message:''
  	});

  }

}
