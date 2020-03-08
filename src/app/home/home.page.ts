import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { notas } from '../Modelo/Notas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private notas:Observable<notas[]>;
  constructor(private fbService:FirebaseService) {}


  ngOnInit(): void {
    this.notas = this.fbService.obtenerNotas();
  }

}
