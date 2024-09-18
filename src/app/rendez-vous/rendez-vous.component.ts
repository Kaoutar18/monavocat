import { Component } from '@angular/core';
import { RendezVous } from '../models/rendez-vous';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { RendezVousService } from '../rendez-vous.service';
import { Client } from '../models/Client.model';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent {
  rendezVous!: Array<RendezVous>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  utilisateur: any;


  constructor(private RendezvousService: RendezVousService, private fb: FormBuilder,public  authService: AuthentificationService,private router:Router) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    });
    this.handleGetALLRendezVous();
  }
  
 



  handleGetALLRendezVous() {
    this.RendezvousService.getAllRendezVous().subscribe({
      next: (data) => {
        this.rendezVous = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handelDeleteRendezVous(p: RendezVous) {
    let conf = confirm("Vous etes sur?");
    if (conf === false) {
      return;
    }
    this.RendezvousService.deleteRendezVous(p.date).subscribe({
      next: (data) => {
        let index = this.rendezVous.indexOf(p);
        this.rendezVous.splice(index, 1);
      }
    });
  }

  handelSearRendezVous() {
    let keyword = this.searchFormGroup.value.keyword;
    this.RendezvousService.searchRendezVous(keyword).subscribe({
      next: (data) => {
        this.rendezVous = data;
      }
    });
  }
  handleNouvelUtilisateur(){
      this.router.navigateByUrl("Admin/NewRendezVous");
      }
  }



