import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  
  utilisateur!: Array<AppUser>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;


  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder,public  authService: AuthentificationService,private router:Router) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    });
    this.handleGetALLUtilisateur();
  }
  // handleGetPageUtilisateur() {
  //   console.log();
  //   this.utilisateurService.getPagesUtilisateur(this.ccurentPage,this.size).subscribe({
  //     next: (data) => {
  //       this.utilisateur = data.utilisateur;
  //       this.totalPages=data.totalPages;
  //     },
  //     error: (err) => {
  //       this.errorMessage = err;
  //     }
  //   });
  // }



  handleGetALLUtilisateur() {
    this.utilisateurService.getAllUtilisateur().subscribe({
      next: (data) => {
        this.utilisateur = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handelDeleteUtilisateur(p: AppUser) {
    let conf = confirm("Are you sure?");
    if (conf === false) {
      return;
    }
    this.utilisateurService.deleteUtilisateur(p.userId).subscribe({
      next: (data) => {
        let index = this.utilisateur.indexOf(p);
        this.utilisateur.splice(index, 1);
      }
    });
  }

  handelSearchUtilisateur() {
    let keyword = this.searchFormGroup.value.keyword;
    this.utilisateurService.searchUtilisateur(keyword).subscribe({
      next: (data) => {
        this.utilisateur = data;
      }
    });
  }
  handleNouvelUtilisateur(){
  this.router.navigateByUrl("Admin/newUtilisateur");
  }

  public handelEtatCompte(p: AppUser): void {
    const etat = p.etat;
    this.utilisateurService.etatCompt(!etat).subscribe({
      next: (data) => {
        p.etat = !etat;
      },
      error: (err) => {
        if (err instanceof Error) {
          this.errorMessage = err.message;
        } else {
          this.errorMessage = 'Une erreur s\'est produite lors de la modification de l\'état du compte.';
        }
      }
    });
  }
  
}