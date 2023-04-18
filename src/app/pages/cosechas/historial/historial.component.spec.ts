import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCosechaComponent } from './historial.component';

describe('HistorialCosechaComponent', () => {
  let component: HistorialCosechaComponent;
  let fixture: ComponentFixture<HistorialCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialCosechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
