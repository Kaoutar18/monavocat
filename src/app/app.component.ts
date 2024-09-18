import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '{{ currentDate | date }}',
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;
  showFooter: boolean = true;

  // Liste des URL des pages où masquer le header et le footer
  pagesToHide: string[] = ['/connexion', '/dashboard', '/Admin','/Admin/Utilisateur','/Admin/Client','/Admin/newUtilisateur','/Admin/Gestion-facture','/Admin/newClient','/Admin/RDV','/Admin/GestionService','/Admin/NewRendezVous','/Admin/NewFacture','/Admin/NewClient','/Admin/new-service','/Admin/GestionDossier','/Admin/updatClient/:id'];


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.pagesToHide.includes(event.url)) {
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = true;
        }
      }
    });
  }

}
