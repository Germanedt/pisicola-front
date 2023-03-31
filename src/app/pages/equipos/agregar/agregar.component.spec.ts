import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEquipoComponent } from './agregar.component';

describe('AgregarEquipoComponent', () => {
  let component: AgregarEquipoComponent;
  let fixture: ComponentFixture<AgregarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
