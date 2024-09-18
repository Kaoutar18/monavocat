import { Injectable } from '@angular/core';
import { facture } from './models/facture.model';
import { UUID } from 'angular2-uuid';
import { Client } from './models/Client.model';
import { Observable, of, throwError } from 'rxjs';
import { ClientService } from './client.service';


@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private facture!: Array<facture>;
  private client!:Array<Client>


  constructor(private seviceClient:ClientService ) { 
    this.facture = [
      {FactureID:UUID.UUID(),NumeroFacture:1,Date_facturation: new Date("2023/05/06"),Id_Client:"CIN1",Montant_Total:150,Statut_paiement:"ouvert",Date_paiement:new Date("06/05/2023"),Methode_paiement:"Espece",Reference_paiement:"R:132255666",Remarque:"non validé"},
      {FactureID:UUID.UUID(),NumeroFacture:2,Date_facturation:new Date("2023/04/04"),Id_Client:"CIN3",Montant_Total:200,Statut_paiement:"payé",Date_paiement:new Date("04/04/2023"),Methode_paiement:"PAR CHEQUE",Reference_paiement:"R:0098765",Remarque:" validé"},
      {FactureID:UUID.UUID(),NumeroFacture:3,Date_facturation:new Date("2023/05/06"),Id_Client:"CIN2",Montant_Total:1200,Statut_paiement:"incomplet",Date_paiement:new Date("04/04/2023"),Methode_paiement:"VIREMENT",Reference_paiement:"R:9934567",Remarque:"non validé"},
      {FactureID:UUID.UUID(),NumeroFacture:4,Date_facturation:new Date("2023/06/10"),Id_Client:"CIN3",Montant_Total:1400,Statut_paiement:"payé",Date_paiement:new Date("06/05/2023"),Methode_paiement:"ESPECE",Reference_paiement:"R:7723456",Remarque:" validé"},

    ];
 
  
 
  }
  public getAllUFACTURE():Observable<facture[]>{
    //let rnd=Math.random();
   // if(rnd<0.1) return throwError( () =>new Error("internet connexion erreur"));
  // else return of(
    return of ( this.facture);
  }
  // public getPagesUtilisateur(sizee:number,pagee:number):Observable<PageUtilisateur>{
  //   let index =pagee*sizee;
  //   let totalPages=~~this.utilisateur/sizee;
  //   if(this.utilisateur.length % sizee  != 0)
  //   totalPages++;
  // let PagesUtilisateur=this.utilisateur.slice(index,index*sizee);
  // return of ({page:pagee,size:sizee,totalPages:totalPages,utilisateur:PagesUtilisateur});

  // }


  public deleteFacture(id :number):Observable<boolean>{
    this.facture= this.facture.filter(p=>p.NumeroFacture!=id);
    return of(true);
   }
   public searchFacture(keyword:string):Observable<facture[]>{
    let facture=this.facture.filter(p=>p.Id_Client.includes(keyword));
    return of(facture);

  }
  // public etatCompt(etat:boolean):Observable <boolean>{
  //   let utilisateur=this.utilisateur.find(p=>p.etat!=etat);
  //   if(utilisateur!=undefined)
  //   {
  //     utilisateur.etat!=utilisateur.etat;
  //     return of(true);
  //   }
  //     else return throwError(()=>new Error("compte non trouvé"));
    
  // }
  
  public addfacture(appuser: facture):Observable<facture>{
    appuser.FactureID=UUID.UUID();
    this.facture.push(appuser);
  return of (appuser);

  }
  getIDClients(): string[] {
    return this.client.map((client: Client) => client.cin);
  }

}
