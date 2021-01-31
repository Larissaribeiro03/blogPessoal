import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(){
    if(environment.token == ''){
     
      this.router.navigate(['/entrar'])
    }
  }

}
