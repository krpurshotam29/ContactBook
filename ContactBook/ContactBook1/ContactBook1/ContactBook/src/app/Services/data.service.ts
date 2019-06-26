import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ContactView } from '../models/contact-view.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public contactDataList :Contact[] = new Array();
  public contact: Contact;
  private BaseUrl = "/api/contact/";


  public _dataEmitter = new Subject<any>();
  public dataEmitted$ = this._dataEmitter.asObservable();

  emitData(type:any ,data?:any) {
    this._dataEmitter.next({ type, data });
  }


  constructor(private http: HttpClient) { 
  }

  getContactViewList(): Observable<ContactView[]> {
    return (this.http.get<ContactView[]>(`${this.BaseUrl}all`));
  }

  getContact(){
    return(this.contact);
  }

  findContactById(id): Observable<Contact>{
    return (this.http.get<Contact>(`${this.BaseUrl}${id}`));
  }

  addContact(contact): Observable<any>{
    return this.http.post(`${this.BaseUrl}add/`, contact);

  }

  UpdateContact(id: number, contact: Contact) {
    return this.http.put(`${this.BaseUrl}update/${id}`, contact);
  }

  
  deleteContact(id: any): Observable<any>{
    return this.http.delete(`${this.BaseUrl}delete/${id}`);
  }

}
