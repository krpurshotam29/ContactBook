import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Operations } from '../enums/enum.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact : Contact;
  public contactForm: FormGroup;
  

  //Validations
  Validation_messages = {
    'name':[
      {type:'required',message:"name is required"}
    ],
    'email':[
      {type: 'required', message: "email is required"},
      {type:'pattern',message:"invalid email"}
    ],
    'mobile':[
      {type:'required',message:"Mobile number is required"},
      {type:'pattern',message:"Invalid mobile number"}
    ],
    'phone':[
      {type:'required',message:"Phone number is required"},
      {type:'pattern',message:"Invalid phone number"}
    ],
    'website':[
      {type:'required',message:"Website is required"},
      {type:'pattern',message:"Invalid website"}
    ],
    'address':[
      {type:'required',message:"address is required"}
    ]
  }


  constructor(private dataService : DataService,private activateRouter:ActivatedRoute,private builder:FormBuilder,private router:Router) {
    this.contact = new Contact({});
   }

  ngOnInit() {
    this.dataService.dataEmitted$.subscribe(p => console.log("Data Emitter = " + p));
    this.initialiseForm();
    this.activateRouter.params.subscribe(param => {
      if (param['id']) {
        this.dataService.findContactById(param['id']).subscribe(p => (this.contact = p, this.initialiseForm()));
      }
    });
  }
  
  initialiseForm(){
    this.contactForm = this.builder.group({
      Id : new FormControl(this.contact.Id),
      Name: new FormControl(this.contact.Name, Validators.required),
      Email: new FormControl(this.contact.Email, [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      Mobile: new FormControl(this.contact.Mobile, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]),
      Phone: new FormControl(this.contact.Phone, [Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]{10}')]),
      Website: new FormControl(this.contact.Website),
      Address: new FormControl(this.contact.Address, Validators.required)
    });
  }

  AddContact() {
    if (this.contactForm.valid) {
      this.dataService.addContact(this.contactForm.value).subscribe(p => console.log(p));
      this.dataService.emitData(Operations.ADDED, this.contactForm.value);
      this.router.navigateByUrl("/");
    }else{
      console.log("Invalid form");
    }
    
  }

  UpdateContact() {
    if (this.contactForm.valid) {
      this.dataService.UpdateContact(this.contact.Id, this.contactForm.value).subscribe(p => console.log(p));
      this.dataService.emitData(Operations.UPDATED, this.contactForm.value);
      this.router.navigateByUrl("/");
    } else {
      console.log("Invalid form");
    }
  }

}
