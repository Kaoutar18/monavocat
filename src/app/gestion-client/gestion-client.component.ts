import { Component } from '@angular/core';
import { Client } from '../models/Client.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent {
  client!: Array<Client>;
  errorMessage!: string;
  searchFormGroup!: FormGroup;
  utilisateur: any;


  constructor(private clientService: ClientService, private fb: FormBuilder,public  authService: AuthentificationService,private router:Router) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(null)
    });
    this.handleGetALLClient();
  }
  
 



  handleGetALLClient() {
    this.clientService.getAllClient().subscribe({
      next: (data) => {
        this.client = data;
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }

  handelDeleteClient(p: Client) {
    let conf = confirm("Vous etes sure?");
    if (conf === false) {
      return;
    }
    this.clientService.deleteClient(p.cin).subscribe({
      next: (data) => {
        let index = this.client.indexOf(p);
        this.client.splice(index, 1);
      }
    });
  }

  handelSearchClient() {
    let keyword = this.searchFormGroup.value.keyword;
    this.clientService.searchClient(keyword).subscribe({
      next: (data) => {
        this.client = data;
      }
    });
  }
  handleNouvelUtilisateur(){
      this.router.navigateByUrl("Admin/newClient");
      }
      handelModifierClient(p: Client) {
        this.router.navigateByUrl("Admin/updatClient/"+p.cin);
      }
  }

