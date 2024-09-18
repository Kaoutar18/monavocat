import { Injectable } from '@angular/core';
import { ClientService } from './client.service';
import { UtilisateurService } from './utilisateur.service';
import { RendezVous } from './models/rendez-vous';
import { Observable, of } from 'rxjs';
import { Client } from './models/Client.model';
import { AppUser } from './models/user.model';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private RendezVous: RendezVous[]=[];
  private client!: Array<Client>;
  private utilisateur!: Array<Client>;
  private utilisateurs!: Array<AppUser>;

  constructor(private clientService:ClientService,private userService:UtilisateurService) { 
   
  }
  // remplirTableRendezvousAvecIdClient(): void {
  //   const idClient = this.clientService.getIDClients(); // Obtenez l'ID du client à partir du service client

  //   // Logique pour remplir la table des rendez-vous avec l'ID du client
  //   // ...
  // }
  public getAllRendezVous():Observable<RendezVous[]>{

    return of ( this.RendezVous);
  }



  public deleteRendezVous(date :Date):Observable<boolean>{
    this.RendezVous= this.RendezVous.filter(p=>p.date!=date);
    return of(true);
   }
   searchRendezVous(keyword: string): Observable<RendezVous[]> {
    const filteredRendezvous = this.RendezVous.filter(rdv => rdv.Id_client==keyword);
    return of(filteredRendezvous);
  }
  getIDClients(): string[] {
    return this.client.map((client: Client) => client.cin);
  }
  public addRendezVous(rdv: RendezVous):Observable<RendezVous>{
    
    this.RendezVous.push(rdv);
  return of (rdv);

  }

}




