import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAlimentoComponent } from './agregar.component';

describe('AgregarAlimentoComponent', () => {
  let component: AgregarAlimentoComponent;
  let fixture: ComponentFixture<AgregarAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
