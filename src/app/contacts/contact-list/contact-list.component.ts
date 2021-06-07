import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  firstName: string;
  lastName: string;
  iNumber: string;
  major: string;

  constructor() { }

  ngOnInit(): void {
    this.firstName = 'Tim';
    this.lastName = 'Thayne';
    this.iNumber = '999999999';
    this.major = 'CIT';
  }

}
