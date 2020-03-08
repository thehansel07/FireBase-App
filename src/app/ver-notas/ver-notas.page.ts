import {AfterViewInit, Component, OnInit} from '@angular/core';
import {notas} from '../Modelo/Notas'
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';
@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.page.html',
  styleUrls: ['./ver-notas.page.scss'],
})
export class VerNotasPage implements OnInit,AfterViewInit {
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
      this.fbService.obtenerNota(id).subscribe(notaData => {
        this.nota = notaData;
      });
    }
  }
  BorrarNotas() {
    this.router.navigateByUrl('/');
    this.fbService.BorrarNotas(this.nota.id).then(() => {
      
    }, err => {
    });
  }

}
