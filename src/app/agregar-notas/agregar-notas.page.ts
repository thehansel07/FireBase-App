import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import{notas} from '../Modelo/Notas'

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.page.html',
  styleUrls: ['./agregar-notas.page.scss'],
})
export class AgregarNotasPage implements OnInit {

  nota:notas={
    title: '',
    content: '',
    createdAt: new Date().getTime()


  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
) { }

  ngOnInit() {
  }
  AgregarNota() {
    this.router.navigateByUrl('/');
    this.fbService.AgregarNotas(this.nota).then(() => {
     
    }, 
    )
  }


}
