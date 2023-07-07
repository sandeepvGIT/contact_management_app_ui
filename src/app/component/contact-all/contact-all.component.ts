import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-all',
  templateUrl: './contact-all.component.html',
  styleUrls: ['./contact-all.component.css'],
})
export class ContactAllComponent implements OnInit {
  public contacts: Contact[] = [];
  public message: string = '';

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllContacts();
  }
  //get all contacts
  private fetchAllContacts() {
    this.contactService.getAllContact().subscribe((data) => {
      this.contacts = data;
    });
  }
  //edit contact
  public editContact(contactId: number) {
    this.router.navigate(['edit', contactId]);
  }
  //remove contact
  public removeContact(contactId: number) {
    this.contactService.removeOneContact(contactId).subscribe((data) => {
      this.message = data;
    });
    this.fetchAllContacts();
  }
}
