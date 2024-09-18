import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {
  ClientFormGroup !:FormGroup;
  constructor(private fb:FormBuilder ,private clientService:ClientService,private router:Router){
  
  }
  ngOnInit():void{
    this.ClientFormGroup=this.fb.group({
      cin:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      nom:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      prenom:this.fb.control(null,[Validators.required]),
      adresse:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      mail:this.fb.control(null,[Validators.required,this.emailValidator]),
      telephone:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
    
  
    })
  
  }
  handleNouveauclient(){
    let utilisateur = this.ClientFormGroup.value;
    console.log(this.ClientFormGroup.value);
    this.clientService.addclient(utilisateur).subscribe({
      next: (data: any) => {
        alert("client  bien ajouté");
        this.ClientFormGroup.reset();
        this.router.navigateByUrl("Admin/newClient");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
    
  }
  getErrormessage(field:string,errors:ValidationErrors|null){
    if (errors?.['minlength']) {
      return field + " devrait avoir au moins " + errors?.['minlength']?.requiredLength + " caractères";
    } else if (errors?.['required']) {
      return field + " est requis";
    } else if (errors?.['email']) {
      return "Adresse e-mail invalide";
    } else {
      return "";
    }
  }
  emailValidator(control: AbstractControl): ValidationErrors | null {
    const email: string = control.value;
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return { invalidEmail: true };
    }

    return null;
  }
}
