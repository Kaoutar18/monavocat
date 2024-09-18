import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-utilisateur',
  templateUrl: './new-utilisateur.component.html',
  styleUrls: ['./new-utilisateur.component.css']
})
export class NewUtilisateurComponent {
  utilisateurFormGroup!: FormGroup;
 
  utilisateur: any;

  constructor(private fb: FormBuilder,private utilisateurService: UtilisateurService,private router:Router) { }

  ngOnInit(): void {
    this.utilisateurFormGroup = this.fb.group({
      nom: this.fb.control(null, Validators.required),
      prenom: this.fb.control(null, [Validators.required,Validators.minLength(4)]),
      adresse: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      mail: this.fb.control(null, [Validators.required, Validators.email, this.emailValidator]),
      telephone: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      Role: ["null", Validators.required],
      code: this.fb.control(null , [Validators.required,Validators.minLength(4)]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8)]),
      etat: this.fb.control(false),
    });
  }

  handleNouvelUtilisateur() {
    let utilisateur = this.utilisateurFormGroup.value;
   

    this.utilisateurService.addutilisateur(utilisateur).subscribe({
      
      next: (data: any) => {
     
        alert("Utilisateur bien ajouté");
        this.utilisateurFormGroup.reset();
        this.router.navigateByUrl("Admin/Utilisateur");
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
    } else if (error?.['email']) {
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
