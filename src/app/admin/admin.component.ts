import { Component } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showContent: boolean = false;
  isFirstClick: boolean = true;

constructor(public  authService: AuthentificationService, private router:Router){

}

ngOnInit():void{
  if (this.authService.isauthenticated()) {
    this.showContent = true;
  this.isFirstClick=true}
}
hideContent() {
  this.showContent = true;
}

handellogout(){
  let conf = confirm("vous-etes sur?");
  if (conf === false) {
    return;
  }
  this.authService.logout().subscribe({
    
    next:(data=>{
       this.router.navigateByUrl("/connexion");
    })
  })
}
}
