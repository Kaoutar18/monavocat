import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css']
})
export class NewServiceComponent {
  ServiceFormGroup !:FormGroup;
  constructor(private fb:FormBuilder,private service:ServiceService,private router:Router){
  
  }
  ngOnInit():void{
    this.ServiceFormGroup=this.fb.group({
      
      Type:this.fb.control(null,[Validators.required]),
    
    
  
    })
  
  }
  handleNouveauService() {
    let utilisateur = this.ServiceFormGroup.value;
    this.service.addService(utilisateur).subscribe({
      next: (data: any) => {
        alert("Service bien ajouté");
        this.ServiceFormGroup.reset();
        this.router.navigateByUrl("Admin/GestionService")
        
        
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  getErrorMessage(nom: string, errors: ValidationErrors|null) {
    if (errors?.['required']) {
      return `Type Service est requis.`;
    }
    // Ajoutez d'autres conditions pour les erreurs spécifiques que vous souhaitez gérer
  
    // Par défaut, retournez une chaîne vide
    return '';
  }
}
