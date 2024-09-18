import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AppUser, PageUtilisateur } from './models/user.model';
import { UUID } from 'angular2-uuid';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  [x: string]: any;
  utilisateurs: BehaviorSubject<AppUser[]> = new BehaviorSubject<AppUser[]>([]);

  private utilisateur: Array<AppUser>;


  constructor() { 
    this.utilisateur = [
      {userId:UUID.UUID(),code:"avocat1",password:"1234",Role:["avocat"],nom:"avocat1",prenom:"avocat1",telephone:"011111111",adresse:"adresse1",mail:"Mail1",etat:true},
     {userId:UUID.UUID(),code:"avocat2",password:"1234",Role:["avocat"],nom:"avocat2",prenom:"avocat2",telephone:"011111111",adresse:"adresse2",mail:"Mail2",etat:true},
      {userId:UUID.UUID(),code:"admin",password:"1234",Role:["admin"],nom:"admin",prenom:"admin",telephone:"011111111",adresse:"adresse1",mail:"Mail1",etat:false},
      {userId:UUID.UUID(),code:"admin1",password:"1234",Role:["admin"],nom:"admin",prenom:"admin",telephone:"011111111",adresse:"adresse1",mail:"Mail1",etat:true},
      {userId:UUID.UUID(),code:"secretaire1",password:"1234",Role:["secretaire"],nom:"secretaire",prenom:"secretaireprenom",telephone:"011111111",adresse:"adresse5",mail:"Mail1",etat:true},

    ];
 
  
 
  }
  public getAllUtilisateur():Observable<AppUser[]>{
    //let rnd=Math.random();
   // if(rnd<0.1) return throwError( () =>new Error("internet connexion erreur"));
  // else return of(
    return of ( this.utilisateur);
  }
  // public getPagesUtilisateur(sizee:number,pagee:number):Observable<PageUtilisateur>{
  //   let index =pagee*sizee;
  //   let totalPages=~~this.utilisateur/sizee;
  //   if(this.utilisateur.length % sizee  != 0)
  //   totalPages++;
  // let PagesUtilisateur=this.utilisateur.slice(index,index*sizee);
  // return of ({page:pagee,size:sizee,totalPages:totalPages,utilisateur:PagesUtilisateur});

  // }


  public deleteUtilisateur(id :string):Observable<boolean>{
    this.utilisateur= this.utilisateur.filter(p=>p.userId!=id);
    return of(true);
   }
   public searchUtilisateur(keyword:string):Observable<AppUser[]>{
    let utilisateur=this.utilisateur.filter(p=>p.nom.includes(keyword));
    return of(utilisateur);

  }
  public etatCompt(etat:boolean):Observable <boolean>{
    let utilisateur=this.utilisateur.find(p=>p.etat!=etat);
    if(utilisateur!=undefined)
    {
      utilisateur.etat!=utilisateur.etat;
      return of(true);
    }
      else return throwError(()=>new Error("compte non trouvé"));
    
  }
  isAvocat(role: string): string[] {
    const avocats = this.utilisateur.filter((utilisateur) => utilisateur.Role.includes("avocat"));
    return avocats.map((avocat) => avocat.nom);
  }
  
 
  public addutilisateur(appuser: AppUser):Observable<AppUser>{
    appuser.userId=UUID.UUID();
    this.utilisateur.push(appuser);
  return of (appuser);

  }
  


}
