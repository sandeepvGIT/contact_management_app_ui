import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUri = 'http://localhost:9696/contact';

  constructor(private httpClient: HttpClient) {}

  //save contact
  public saveContact(contact: Contact): Observable<string> {
    return this.httpClient.post(`${this.baseUri}/save`, contact, {
      responseType: 'text',
    });
  }
  //get all contact
  public getAllContact(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseUri}/all`);
  }

  //get Contact
  public getOneContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUri}/find/${id}`);
  }

  //remove Contact
  public removeOneContact(id: number): Observable<string> {
    return this.httpClient.delete(`${this.baseUri}/delete/${id}`, {
      responseType: 'text',
    });
  }
  //update Contact
  public updateOneContact(contact: Contact): Observable<string> {
    return this.httpClient.put(`${this.baseUri}/update`, contact, {
      responseType: 'text',
    });
  }
}
