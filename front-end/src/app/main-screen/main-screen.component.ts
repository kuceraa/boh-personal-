import { Component, OnInit } from '@angular/core';

import { MainScreenService, Client } from './main-screen.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {
  clients: Client[];

  firstNames: Array<string> = ["Duncan", "Sam", "Nic"];
  lastNames: Array<string> = ["Webb", "Weber", "Stone"];
  status: Array<number>= [1, 1, 2];
  phoneNumbers: Array<string>=["50","56","24"]; 
  companyNames: Array<string>=["Kroger", "Kroger", "Kroger"];
  companyFirstNames: Array<string> = ["Bob", "Bob", "Bob"];
  companyLastNames: Array<string>=["Kroger", "Kroger", "Kroger"];
  companyEmail: Array<string> = ["yeet@yeet.com","yeet@yeet.com","yeet@yeet.com"];
  companyPhone: Array<string> = ["50", "50", "50"];

  constructor(private readonly mainScreenService: MainScreenService) {}
  
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
      (response)=>{
        alert(response);
      }
    )
  }


}
