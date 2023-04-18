import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCosechaComponent } from './detalles.component';

describe('DetallesCosechaComponent', () => {
  let component: DetallesCosechaComponent;
  let fixture: ComponentFixture<DetallesCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCosechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
