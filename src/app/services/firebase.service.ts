import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {notas} from '../Modelo/Notas';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private notas:Observable<notas[]>;
  private notaCollection: AngularFirestoreCollection<notas>;

  constructor(private afs: AngularFirestore) {
      //Para definir la coleccion
    this.notaCollection = this.afs.collection<notas>('notas');
    this.notas = this.notaCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );
  }
  
  //Aqui se obtienen todas las notas
  obtenerNotas():Observable<notas[]>{
    return this.notas;
  }

//Para obteer una solo nota
obtenerNota(id:string):Observable<notas>{
  return this.notaCollection.doc<notas>(id).valueChanges().pipe(
  take(1),
  map(notas =>{
    notas.id =id;
    return notas;

  }));



}

//Agregando notas
AgregarNotas(nota:notas):Promise<DocumentReference>{
  return this.notaCollection.add(nota);

}

ActualizandoNotas(nota:notas):Promise<void>{
  return this.notaCollection.doc(nota.id).update({ title: nota.title, content: nota.content })

}
BorrarNotas(id: string): Promise<void> {
  return this.notaCollection.doc(id).delete();
}










}
