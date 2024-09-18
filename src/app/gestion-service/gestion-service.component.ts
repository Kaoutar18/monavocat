import { Component } from '@angular/core';
import { Offre } from '../models/offre.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { ServiceService } from '../service.service';
import { Client } from '../models/Client.model';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent {
  service!: Array<Offre>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  utilisateur: any;


  constructor(private Serviceservice: ServiceService, private fb: FormBuilder,public  authService: AuthentificationService,private router:Router) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    });
    this.handleGetALLService();
  }
  
 



  handleGetALLService() {
    this.Serviceservice.getAllOffre().subscribe({
      next: (data) => {
        this.service = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handelDeleteOffre(p: Offre) {
    let conf = confirm("Vous etes sur ?");
    if (conf === false) {
      return;
    }
    this.Serviceservice.deleteService(p.Type).subscribe({
      next: (data) => {
        let index = this.service.indexOf(p);
        this.service.splice(index, 1);
      }
    });
  }

  handelSearchOffre() {
    let keyword = this.searchFormGroup.value.keyword;
    this.Serviceservice.searchOffre(keyword).subscribe({
      next: (data) => {
        this.service = data;
      }
    });
  }
  handleNouveauService(){
      this.router.navigateByUrl("Admin/new-service");
      }
  }



