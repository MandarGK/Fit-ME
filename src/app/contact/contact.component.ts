import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name:new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('[a-z A-z]*') ]),
      
    email:new FormControl('',[Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    
    subject:new FormControl('',[Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('[a-z A-z]*') ]),
      
    message:new FormControl('',[Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('[a-z A-z]*') ])
  });
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(){

  }
}
