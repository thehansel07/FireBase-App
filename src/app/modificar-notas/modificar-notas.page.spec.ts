import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarNotasPage } from './modificar-notas.page';

describe('ModificarNotasPage', () => {
  let component: ModificarNotasPage;
  let fixture: ComponentFixture<ModificarNotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarNotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
