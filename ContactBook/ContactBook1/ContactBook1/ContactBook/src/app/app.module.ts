import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DeleteDialogBoxComponent } from './delete-dialog-box/delete-dialog-box.component';
import { PageNotFoundComponent } from './page-not-found';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactDetailComponent,
    ContactListComponent,
    DeleteDialogBoxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteDialogBoxComponent]
})
export class AppModule { }
