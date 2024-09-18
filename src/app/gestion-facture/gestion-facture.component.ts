import { Component } from '@angular/core';
import { facture } from '../models/facture.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FactureService } from '../facture.service';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-gestion-facture',
  templateUrl: './gestion-facture.component.html',
  styleUrls: ['./gestion-facture.component.css']
})
export class GestionFactureComponent {
  facture!: Array<facture>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  selectedFacture: any;
  client: any;


  constructor(private FactureService: FactureService, private fb: FormBuilder,public  authService: AuthentificationService,private router:Router,private serviceClient:ClientService) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    });
    this.handleGetALLFacture();
  }
  // handleGetPageUtilisateur() {
  //   console.log();
  //   this.utilisateurService.getPagesUtilisateur(this.ccurentPage,this.size).subscribe({
  //     next: (data) => {
  //       this.utilisateur = data.utilisateur;
  //       this.totalPages=data.totalPages;
  //     },
  //     error: (err) => {
  //       this.errorMessage = err;
  //     }
  //   });
  // }



  handleGetALLFacture() {
    this.FactureService.getAllUFACTURE().subscribe({
      next: (data) => {
        this.facture = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handelDeleteFacture(p: facture) {
    let conf = confirm("Vous etes sure?");
    if (conf === false) {
      return;
    }
    this.FactureService.deleteFacture(p.NumeroFacture).subscribe({
      next: (data) => {
        let index = this.facture.indexOf(p);
        this.facture.splice(index, 1);
      }
    });
  }

  handelSearchFacture() {
    let keyword = this.searchFormGroup.value.keyword;
    this.FactureService.searchFacture(keyword).subscribe({
      next: (data) => {
        this.facture = data;
      }
    });
  }
  handleNouvelFacture(){
  this.router.navigateByUrl("Admin/NewFacture");
  }

  // public handelEtatCompte(p: AppUser): void {
  //   const etat = p.etat;
  //   this.utilisateurService.etatCompt(!etat).subscribe({
  //     next: (data) => {
  //       p.etat = !etat;
  //     },
  //     error: (err) => {
  //       if (err instanceof Error) {
  //         this.errorMessage = err.message;
  //       } else {
  //         this.errorMessage = 'Une erreur s\'est produite lors de la modification de l\'état du compte.';
  //       }
  //     }
  //   });
  // }
  printFacture(facture: any) {
    const printContent = document.createElement('div');
    printContent.innerHTML = `
      <h1>Facture</h1>
      <p>Date : ${facture.Date_facturation}</p>
      <p>Numéro de facture : ${facture.NumeroFacture}</p>
      <p>Client  : ${facture.Id_Client}</p>
      <p>Date Facture : ${facture.Date_facturation}</p>
      <p>Date Paiemet : ${facture.Date_paiement}</p>
      <p>Remarque : ${facture.Remarque}</p>
      <p>Methode Paiement : ${facture.Methode_paiement}</p>
      <p>Statut Paiement : ${facture.Statut_paiement}</p>
      <!-- ... Autres informations de la facture ... -->
      <button onclick="window.print()">Imprimer</button>
      <button onclick="window.close()">Fermer</button>
    `;
  
    const popupWindow = window.open('', '_blank', 'width=600,height=600');
    if (popupWindow) {
      popupWindow.document.open();
      popupWindow.document.write(`
        <html>
        <head>
          <title>Facture</title>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
        </html>
      `);
      popupWindow.document.close();
    }
  }
 
}

