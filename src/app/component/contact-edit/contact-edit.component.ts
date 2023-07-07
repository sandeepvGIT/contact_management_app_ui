import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  public contact: any = {};
  public message: string = '';
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params['contactId'];
    this.contactService.getOneContact(id).subscribe(
      (data) => {
        this.contact = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public updateContact(contact: Contact) {
    this.contactService.updateOneContact(contact).subscribe((data) => {
      this.message = data;
    });
    //navigate to all
    this.router.navigate(['all']);
  }
}
