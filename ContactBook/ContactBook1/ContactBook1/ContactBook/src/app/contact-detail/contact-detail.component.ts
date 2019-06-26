import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDialogBoxComponent } from '../delete-dialog-box/delete-dialog-box.component';
import { DataService } from '../Services/data.service';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit { 

  public contact : Contact;
  public id : any;

  constructor(public dialog : MatDialog, private contactService: DataService,private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activedRouter.params.subscribe(param => ((
      this.contactService.findContactById(param['id']).subscribe(
        p => (this.contact = p)
      ),
      this.id = param['id']
      )));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent,{
      data:{id:this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed");

    });
  }

}
