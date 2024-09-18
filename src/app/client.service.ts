import { Injectable } from '@angular/core';
import { Client } from './models/Client.model';
import { Observable, of } from 'rxjs';
import { UUID } from 'angular2-uuid';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  [x: string]: any;

  private client!: Array<Client>;
  


  constructor() { 
    this.client = [
      {cin: "CIN1",nom:"client1",prenom:"prenom1" ,telephone:"011111111",adresse:"adresse1",mail:"Mail1"},
      {cin:"CIN2",nom:"client2",prenom:"prenom2",telephone:"011111111",adresse:"adresse2",mail:"Mail2"},
      {cin:"CIN3",nom:"client3",prenom:"prenom3",telephone:"011111111",adresse:"adresse3",mail:"Mail3"},
      {cin:"CIN4",nom:"client3",prenom:"prenom4",telephone:"011111111",adresse:"adresse4",mail:"Mail4"},

    ];
   
  
 
  }
  public getAllClient():Observable<Client[]>{
    //let rnd=Math.random();
   // if(rnd<0.1) return throwError( () =>new Error("internet connexion erreur"));
  // else return of(
    return of ( this.client);
  }
  // public getPagesUtilisateur(sizee:number,pagee:number):Observable<PageUtilisateur>{
  //   let index =pagee*sizee;
  //   let totalPages=~~this.utilisateur/sizee;
  //   if(this.utilisateur.length % sizee  != 0)
  //   totalPages++;
  // let PagesUtilisateur=this.utilisateur.slice(index,index*sizee);
  // return of ({page:pagee,size:sizee,totalPages:totalPages,utilisateur:PagesUtilisateur});

  // }


  public deleteClient(Cin :string):Observable<boolean>{
    this.client= this.client.filter(p=>p.cin!=Cin);
    return of(true);
   }
   public searchClient(keyword:string):Observable<Client[]>{
    let client=this.client.filter(p=>p.nom.includes(keyword));
    return of(client);

  }
  getIDClients(): string[] {
    return this.client.map(client => client.cin);
  }
  public addclient(appuser: Client):Observable<Client>{
  
    this.client.push(appuser);
  return of (appuser);

  }

}
