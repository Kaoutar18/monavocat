import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { FactureService } from '../facture.service';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-facture',
  templateUrl: './new-facture.component.html',
  styleUrls: ['./new-facture.component.css']
})
export class NewFactureComponent {
  idClients: string[] = [];
  selectedClientId: string | undefined;

  FactureForms !:FormGroup;
  constructor(private fb:FormBuilder,private servicefacture:FactureService,private serviceClient:ClientService,private router:Router){
  
  }
  ngOnInit():void{
    this.FactureForms=this.fb.group({
      NumeroFacture:this.fb.control(null,[Validators.required]),
      Date_facturation:this.fb.control(null,Validators.required),
      Id_Client:this.fb.control(null,Validators.required),
      Montant_Total:this.fb.control(null,Validators.required),
      Statut_paiement:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      Methode_paiement:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      Date_paiement:this.fb.control(null,Validators.required),
      Reference_paiement:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      Remarque:this.fb.control(null,[Validators.required,Validators.minLength(4)]),


    
  
    })
    this.getIDClients();
  
  }
  handleNouvelFacture() {
    let utilisateur = this.FactureForms.value;
  
    this.servicefacture.addfacture(utilisateur).subscribe({
      
      next: (data: any) => {
      
        alert("Facture bien ajouté");
        this.FactureForms.reset();
        this.router.navigateByUrl("Admin/Gestion-facture");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  
  getErrormessage(field: string, error: ValidationErrors | null) {
    if (error?.['minlength']) {
      return field + " devrait avoir au moins " + error?.['minlength']?.requiredLength + " caractères";
    } else if (error?.['required']) {
      return field + " est requis";
    
    } else {
      return "";
    }
  }
  handleSelectedClientId(): void {
    console.log(this.idClients);
  }
  getIDClients(): void {
    this.idClients = this.serviceClient.getIDClients();
  }
}

