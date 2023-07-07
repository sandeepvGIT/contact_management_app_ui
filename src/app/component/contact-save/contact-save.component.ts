import { Component } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-save',
  templateUrl: './contact-save.component.html',
  styleUrls: ['./contact-save.component.css'],
})
export class ContactSaveComponent {
  public conntact = new Contact();
  public message: string = '';

  constructor(private contactService: ContactService) {}
  //save the contact
  public saveContact(contact: Contact) {
    this.contactService.saveContact(contact).subscribe((data) => {
      this.message = data;
    });
  }

  public verifyContactName(event: any) {}
}
