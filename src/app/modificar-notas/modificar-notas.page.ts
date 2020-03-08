import {AfterViewInit, Component, OnInit} from '@angular/core';
import {notas} from '../Modelo/Notas';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';


@Component({
  selector: 'app-modificar-notas',
  templateUrl: './modificar-notas.page.html',
  styleUrls: ['./modificar-notas.page.scss'],
})
export class ModificarNotasPage implements OnInit,AfterViewInit{
  nota: notas = {
    id: '',
    title: '',
    content: '',
    createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.obtenerNota(id).subscribe(noteData => {
        this.nota = noteData;
      });
    }
  }

  ModificarNote() {
    this.router.navigate(['/']);
    this.fbService.ActualizandoNotas(this.nota).then(() => {
    
    }, err => {
    });
  }

}
