import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ClientService } from '../client.service';
import { UtilisateurService } from '../utilisateur.service';
import { AppUser } from '../models/user.model';
import { RendezVousService } from '../rendez-vous.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-rendezvous',
  templateUrl: './new-rendezvous.component.html',
  styleUrls: ['./new-rendezvous.component.css']
})
export class NewRendezvousComponent implements OnInit {
  idClients: string[] = [];
  idCUtilisateur: string[] = [];
  RendezvousFormGroup!: FormGroup;
  selectedClientId: string | undefined;
  selecteduserId: string | undefined;
  idAvocats: string[]=[];


  constructor(private fb: FormBuilder, private clientService: ClientService,private UtilisateurService:UtilisateurService,private seviceRDV:RendezVousService,private router:Router) {}

  ngOnInit(): void {
    this.RendezvousFormGroup = this.fb.group({
      Id_client: [null, Validators.required],
      Id_avocat: [null, Validators.required],
      date: [null, [Validators.required, Validators.minLength(4)]],
      Heure:[null,Validators.required]
    });

    this.getIDClients();
   this.getIDUser();
  }

  getIDClients(): void {
    this.idClients = this.clientService.getIDClients();
  }
  getIDUser(): void {
    this.idAvocats = this.UtilisateurService.isAvocat('avocat');
  }
 
  handleSelectedClientId(): void {
    console.log(this.idClients);
  }
  handleSelectedAvocatID(): void {
    console.log(this.idCUtilisateur);
  }

  handleNouvelRendezvous(): void {
    let utilisateur = this.RendezvousFormGroup.value;
  
    this.seviceRDV.addRendezVous(utilisateur).subscribe({
      
      next: (data: any) => {
      console.log("hhh");
        alert("Rendez-Vous bien ajouté");
        this.RendezvousFormGroup.reset();
        this.router.navigateByUrl("Admin/RDV");
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getErrorMessage(nom: string, errors: ValidationErrors): string {
    // Logic to generate error message
    return '';
  }
 
}
