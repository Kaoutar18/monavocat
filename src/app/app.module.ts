import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { DroitSocialComponent } from './expertise/droit-social/droit-social.component';
import { DroitDesSocietesComponent } from './expertise/droit-des-societes/droit-des-societes.component';
import { DroitImmobilierComponent } from './expertise/droit-immobilier/droit-immobilier.component';
import { DroitdesaffairesetdescontratsComponent } from './expertise/droitdesaffairesetdescontrats/droitdesaffairesetdescontrats.component';
import { AboutComponent } from './about/about.component';
import { DroitdeFamilleComponent } from './expertise/droitde-famille/droitde-famille.component';
import { NotreequipeComponent } from './notreequipe/notreequipe.component';
import { HeaderComponent } from './header/header.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AuthGuard } from './guards/authentification.guard';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { NewUtilisateurComponent } from './new-utilisateur/new-utilisateur.component';
import { GestionFactureComponent } from './gestion-facture/gestion-facture.component';
import { NewClientComponent } from './new-client/new-client.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { NewRendezvousComponent } from './new-rendezvous/new-rendezvous.component';
import { NewFactureComponent } from './new-facture/new-facture.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { GestionDossierComponent } from './gestion-dossier/gestion-dossier.component';
import { RDVComponent } from './rdv/rdv.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';


@NgModule({
  declarations: [
   
    AppComponent,
    AccueilComponent,
    AproposComponent,
    ContactComponent,
    ExpertiseComponent,
    DroitSocialComponent,
    DroitDesSocietesComponent,
    DroitImmobilierComponent,
    DroitdesaffairesetdescontratsComponent,
    AboutComponent,
    DroitdeFamilleComponent,
    NotreequipeComponent,
    HeaderComponent,
    BlogDetailComponent,
    ConnexionComponent,
    AdminComponent,
    UtilisateurComponent,
    GestionClientComponent,
    NewUtilisateurComponent,
    GestionFactureComponent,
    NewClientComponent,
    RendezVousComponent,
    GestionServiceComponent,
    NewRendezvousComponent,
    NewFactureComponent,
    NewServiceComponent,
    GestionDossierComponent,
    RDVComponent,
    ModifierClientComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
