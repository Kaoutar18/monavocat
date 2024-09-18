import { Injectable } from '@angular/core';
import { AppUser } from './models/user.model';
import {  UUID } from 'angular2-uuid';
import { Observable, of, throwError } from 'rxjs';
import { __values } from 'tslib';
import { UtilisateurService } from './utilisateur.service';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  [x: string]: any;
autheticatedUser:AppUser|undefined;
  users:AppUser[]=[];
  constructor(private utilisateurService: UtilisateurService) {
    this.utilisateurService.getAllUtilisateur().subscribe(users => {
      this.users = users;
    });
  }

 
   
   public login(code: string, password: string): Observable<AppUser> {
    let appUser = this.users.find(u => u.code == code);
    if (!appUser) {
      return throwError("User not found.");
    }
    if (appUser.password !== password) {
      return throwError("Incorrect password.");
    }
    if (!appUser.etat) {
      return throwError("Compte désactivé.");
    }
    return of(appUser);
  }
  
  
   public authenticatUser(appuser:AppUser):Observable<boolean>{
this.autheticatedUser=appuser;
localStorage.setItem("authUser",JSON.stringify({code:appuser.code,roles:appuser.Role,jwt:"JWT_TOKEN"}));
return of(true);
   }


   public hasRole(role:string):boolean{
    return this.autheticatedUser!.Role.includes(role);

   }
   public isauthenticated(){
    return this.autheticatedUser!=undefined;
   }
   public logout():Observable<boolean>{
    this.autheticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
   }
  
}
