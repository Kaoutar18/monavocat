export interface AppUser
{
    userId:string;
    code:string
    password:string;
    nom:string;
    prenom:string;
    adresse:string;
    mail:string;
    telephone:string;
    Role:string[];
    etat:boolean;
}
export interface PageUtilisateur
{
    utilisateur:AppUser[];
    size:number;
    page:number;
    totalPages:number
}