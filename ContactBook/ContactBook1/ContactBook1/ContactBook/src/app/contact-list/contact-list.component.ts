import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContactView } from '../models/contact-view.model';
import { DataService } from '../Services/data.service';
import { Operations } from '../enums/enum.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactViewList: ContactView[] = new Array<ContactView>();

  constructor(private contactService: DataService) { 
  }

  ngOnInit() {
    this.contactService.dataEmitted$.subscribe(p => this.updateContactData(p));
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContactViewList().subscribe(param => this.contactViewList = param);
  }



  updateContactData(e) {
    if (e) {
      if (e.type == Operations.ADDED) {
        this.contactViewList.push(e.data);
      } else if (e.type == Operations.UPDATED) {
        this.contactViewList.splice(this.contactViewList.findIndex(p => p.Id == e.data.Id), 1, e.data);
      } else if (e.type == Operations.DELETED) {
        this.contactViewList.splice(this.contactViewList.findIndex(p => p.Id == e.data), 1);
      }
    }
  }
}
