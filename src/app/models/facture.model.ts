export interface facture
{
    FactureID:string;
    NumeroFacture:number;
    Date_facturation:Date;
    Id_Client:string;
    Montant_Total:number;
    Statut_paiement:string;
    Date_paiement:Date;
    Methode_paiement:string;
    Reference_paiement:string;
    Remarque:string;
}