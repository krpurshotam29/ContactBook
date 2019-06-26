import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"/",pathMatch:"full"},
  {path:"contact/:id/detail",component:ContactDetailComponent},
  {path:"add-contact",component:AddContactComponent},
  {path:"edit-contact/:id",component:AddContactComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
