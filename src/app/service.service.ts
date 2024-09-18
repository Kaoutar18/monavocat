import { Injectable } from '@angular/core';
import { Offre } from './models/offre.model';
import { UUID } from 'angular2-uuid';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private service!: Array<Offre>;
  


  constructor() { 
    this.service = [
      {ID_Service:UUID.UUID(),Type:"droit de societé"},
      {ID_Service:UUID.UUID(),Type:"droit de contrat"},
      {ID_Service:UUID.UUID(),Type:"droit de travail"},
      {ID_Service:UUID.UUID(),Type:"droit de famille"},

    ];
   
  
 
  }
  public getAllOffre():Observable<Offre[]>{
    //let rnd=Math.random();
   // if(rnd<0.1) return throwError( () =>new Error("internet connexion erreur"));
  // else return of(
    return of ( this.service);
  }



  public deleteService(type :string):Observable<boolean>{
    this.service= this.service.filter(p=>p.Type!=type);
    return of(true);
   }
   public searchOffre(keyword:string):Observable<Offre[]>{
    let service=this.service.filter(p=>p.Type.includes(keyword));
    return of(service);

  }

  public addService(appuser: Offre):Observable<Offre>{
    appuser.ID_Service=UUID.UUID();
    this.service.push(appuser);
  return of (appuser);

  }
}


