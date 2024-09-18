import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertiseComponent } from './expertise/expertise.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
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

const routes: Routes = [
 {    path:'',component:AccueilComponent},
 //{ path: '', component: NewClientComponent},
 {    path:'accueil',component:AccueilComponent},
  {    path:'apropos',component:AproposComponent},
  {    path:'contact',component:ContactComponent},
  {path:'expertise',component:ExpertiseComponent},
  {    path:'droit-social',component:DroitSocialComponent},
  {    path:'droit-des-societes',component:DroitDesSocietesComponent},
  {    path:'droit-immobilier',component:DroitImmobilierComponent},
 {path:'droitdesaffairesetdescontrats',component:DroitdesaffairesetdescontratsComponent},
 {path:'about',component:AboutComponent},
 {path:'droitde-famille',component:DroitdeFamilleComponent},
 {path: 'notreequipe', component: NotreequipeComponent },
 {    path:'header',component:HeaderComponent},
 {    path:'blog-detail',component:BlogDetailComponent},
 {    path:'connexion',component:ConnexionComponent},
 {    path:'Admin',component:AdminComponent,canActivate:[AuthGuard],children :[
  { path: 'Client', component: GestionClientComponent },
  { path: 'Utilisateur', component: UtilisateurComponent },
  { path: 'newUtilisateur', component: NewUtilisateurComponent },
  { path: 'Gestion-facture', component: GestionFactureComponent },
  { path: 'newClient', component: NewClientComponent },
  { path: 'GestionRendez-vous', component: RendezVousComponent },
  { path: 'GestionService', component: GestionServiceComponent },
  { path: 'NewRendezVous', component: NewRendezvousComponent },
  { path: 'NewFacture', component: NewFactureComponent },
  { path: 'new-service', component: NewServiceComponent },
  { path: 'GestionDossier', component: GestionDossierComponent },
  {    path:'RDV',component:RDVComponent},
  {    path:'updatClient/:id',component:ModifierClientComponent},

 ]},



  
  
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
