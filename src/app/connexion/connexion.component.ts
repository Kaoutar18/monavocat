import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage:any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthentificationService
  ) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      Code: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  handlelogin(): void {
    let code = this.userFormGroup.value.Code; // Utilisez "Code" avec une majuscule
    let password = this.userFormGroup.value.password; // Utilisez "password" avec une minuscule
  
    this.authservice.login(code, password).subscribe({
      next: (appUser) => {
        this.authservice.authenticatUser(appUser).subscribe({
          next: (data) => {
            this.router.navigateByUrl("/Admin");
          }
        });
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }
  
  }

