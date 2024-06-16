/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '/root/crm-frontend/src/app/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: '/root/crm-frontend/src/app/company-details/company-details.component.html',
  styleUrls: ['/root/crm-frontend/src/app/company-details/company-details.component.sass']
})
export class CompanyDetailsComponent implements OnInit {
  company: any;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyDetails(companyId).subscribe(
      (data) => {
        this.company = data;
      },
      (error) => {
        console.error('Error fetching company details:', error);
      }
    );
  }
}*/