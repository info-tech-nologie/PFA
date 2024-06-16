import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass']
})
export class ClientFormComponent implements OnInit {

  client: Client = {
    id: 0,
    NumContrat: '',
    Client: '',
    Debit: '',
    NumSerieModem: '',
    IpAdresse: '',
    Contact: '',
    Login: '',
    WifiPassword: '',
    RouterPassword: '',
    MAC: '',
    DateMESTT: '',
    TypeConvention: '',
    MAIL: ''
  };

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}

  saveClient(): void {
    this.clientService.createClient(this.client).subscribe(
      (response) => {
        console.log('Client created successfully:', response);
        this.router.navigate(['/clients']);
      },
      (error) => {
        console.log('Error creating client:', error);
      }
    );
  }

}
