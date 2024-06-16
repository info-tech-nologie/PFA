import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import * as pdfMake from 'pdfmake/build/pdfmake'; // Importer pdfMake
import * as pdfFonts from 'pdfmake/build/vfs_fonts'; // Importer les polices pour pdfMake
//import * as XLSX from 'xlsx'


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {

  clients: any[] = [];
   
  hoveredClient: any | null = null; 
  searchTerm: string = '';
  file: File | null = null;

  constructor(private clientService: ClientService, private ngxCsvParser: NgxCsvParser) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.log('Error fetching clients:', error);
      }
    );
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(
      () => {
        console.log('Client deleted successfully');
        this.loadClients();
      },
      (error) => {
        console.log('Error deleting client:', error);
      }
    );
  }
  showClientDetails(client: any): void {
    this.hoveredClient = client;
  }

  // Méthode pour cacher les détails du client quand le survol se termine
  hideClientDetails(): void {
    this.hoveredClient = null;
  }
  print(): void {
    window.print();
  }

  fileChangeListener(event: any): void {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.file = files[0];
      const fileReader: FileReader = new FileReader();
      fileReader.onload = (e: any) => {
        const contents = e.target.result;
        if (typeof contents === 'string') {
          const lines = contents.split('\n');
          const jsonData = [];
          const headers = lines[0].split(',');
          for (let i = 1; i < lines.length; i++) {
            const data = lines[i].split(',');
            const entry: { [key: string]: string } = {}; // Specify type of entry
            for (let j = 0; j < headers.length; j++) {
              entry[headers[j].trim()] = data[j] ? data[j].trim() : ''; // Handle missing data[j]
            }
            jsonData.push(entry);
          }
          console.log(jsonData); // Use jsonData for your import logic
        }
      };
      fileReader.readAsText(this.file);
    }
  }


  exportToCSV(): void {
    const options = {
      headers: [
        'id', 'NumContrat', 'Nom', 'Débit', 'Numéro de série du modem', 'Adresse IP',
        'Contact', 'Login', 'Mot de passe WiFi', 'Mot de passe du routeur', 'Adresse MAC',
        'Date', 'Type de convention', 'Email'
      ]
    };
  
    // Générer le contenu CSV à partir des données clients
    const csvContent = this.generateCSVContent(this.clients, options);
  
    // Télécharger le fichier CSV
    this.downloadCSVFile(csvContent, 'clients.csv');
  }
  
  private generateCSVContent(data: any[], options: { headers: string[] }): string {
    const csvRows: string[] = [];
  
    // Ajouter l'en-tête CSV
    csvRows.push(options.headers.join(','));
  
    // Ajouter chaque ligne de données
    data.forEach((client) => {
      const row = options.headers.map(header => {
        switch (header) {
          case 'id':
            return client.id ?? ''; // Utilisation de l'opérateur de coalescence nullish (??) pour gérer les valeurs null ou undefined
          case 'NumContrat':
            return client.NumContrat ?? '';
          case 'Nom':
            return client.Client ?? '';
          case 'Débit':
            return client.Debit ?? '';
          case 'Numéro de série du modem':
            return client.NumSerieModem ?? '';
          case 'Adresse IP':
            return client.IpAdresse ?? '';
          case 'Contact':
            return client.Contact ?? '';
          case 'Login':
            return client.Login ?? '';
          case 'Mot de passe WiFi':
            return client.WifiPassword ?? '';
          case 'Mot de passe du routeur':
            return client.RouterPassword ?? '';
          case 'Adresse MAC':
            return client.MAC ?? '';
          case 'Date':
            return client.DateMESTT ?? '';
          case 'Type de convention':
            return client.TypeConvention ?? '';
          case 'Email':
            return client.MAIL ?? '';
          default:
            return '';
        }
      }).join(',');
    
      csvRows.push(row);
    });
    
    // Joindre toutes les lignes en une chaîne CSV complète
    return csvRows.join('\n');
  }
  
  private downloadCSVFile(csvContent: string, filename: string): void {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
    // Vérification simple de l'existence de `navigator.msSaveBlob`
    if ((navigator as any).msSaveBlob) {
      (navigator as any).msSaveBlob(blob, filename);
    } else {
      // Méthode de téléchargement alternative pour les navigateurs modernes
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  
  
  
  exportToPDF(): void {
    const docDefinition = {
      content: [
        { text: 'Liste des clients', style: 'header' },
        this.generateClientTable()
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 10, 0, 10] as [number, number, number, number] }
      }
    };
  
    pdfMake.createPdf(docDefinition).download('clients.pdf');
  }
  private generateClientTable(): any {
    return {
      table: {
        headerRows: 1,
        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
        body: [
          [
            'ID', 'Numéro de contrat', 'Nom', 'Débit', 'Numéro de série du modem', 'Adresse IP',
            'Contact', 'Login', 'Mot de passe WiFi', 'Mot de passe du routeur', 'Adresse MAC',
            'Date', 'Type de convention', 'Email', 'Date de création', 'Date de mise à jour'
          ],
          ...this.clients.map(client => [
            client.id ?? '',
            client.NumContrat ?? '',
            client.Client ?? '',
            client.Debit ?? '',
            client.NumSerieModem ?? '',
            client.IpAdresse ?? '',
            client.Contact ?? '',
            client.Login ?? '',
            client.WifiPassword ?? '',
            client.RouterPassword ?? '',
            client.MAC ?? '',
            client.DateMESTT ?? '',
            client.TypeConvention ?? '',
            client.MAIL ?? '',
            client.created_at ?? '',
            client.updated_at ?? ''
          ])
        ]
      }
    };
  }
  // Méthode pour filtrer les clients en fonction du terme de recherche
  filterClients(): any[] {
    if (!this.searchTerm.trim()) {
      return this.clients; // Retourne tous les clients si aucun terme de recherche n'est saisi
    }
    return this.clients.filter(client =>
      client.Client.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.NumContrat.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.Contact.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.IpAdresse.toLowerCase().includes(this.searchTerm.toLowerCase())
      // Ajoutez d'autres critères de recherche selon vos besoins
    );
  }
}
