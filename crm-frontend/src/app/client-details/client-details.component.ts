/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Client } from '../models/client';
import { ClientService } from '/root/crm-frontend/src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: '/root/crm-frontend/src/app/client-details/client-details.component.html',
  styleUrls: ['/root/crm-frontend/src/app/client-details/client-details.component.sass']
})
export class ClientDetailsComponent implements OnInit {

  client: any;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    
    if (idParam !== null) {
      const id = +idParam; // Convertir le paramètre 'id' en nombre

      this.clientService.getClientById(id).subscribe(
        (data: Client) => {
          this.client = data;
        },
        (error) => {
          console.error('Error fetching client details:', error);
        }
      );
    } else {
      console.error('No valid ID found in the route parameter.');
    }
}}

*/