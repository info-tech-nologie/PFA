import { Component, OnInit } from '@angular/core';
import { Company } from '/root/crm-frontend/src/app/models/company';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html', // Chemin relatif par rapport à company-list.component.ts
  styleUrls: ['./company-list.component.sass']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getCompanies().subscribe(
      (data: Company[]) => {
        this.companies = data;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(
      () => {
        console.log('Company deleted successfully');
        // Actualiser la liste des entreprises après suppression
        this.loadCompanies();
      },
      (error) => {
        console.error('Error deleting company:', error);
      }
    );
  }
}