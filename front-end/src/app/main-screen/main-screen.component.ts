import { Component, OnInit } from '@angular/core';

import { MainScreenService, Client, Company } from './main-screen.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})

export class MainScreenComponent implements OnInit {
  clients: Client[];
  companies: Company[];

  constructor(private readonly mainScreenService: MainScreenService) {
  }
  
  ngOnInit(): void {
    this.populate();
  }

  private populate() {
    this.mainScreenService.getClients().subscribe(
      //TODO populate firstNames, lastNames, phoneNumbers, status
      (clients: Client[]) => this.clients = clients
    );
    this.mainScreenService.getCompanies().subscribe(
      //TODO populate companyNames, companyFirstNames, companyLastNames, companyEmail, companyPhone
      (companies: Company[])=>this.companies = companies
    )
  }


}
