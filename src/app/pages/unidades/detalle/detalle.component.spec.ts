import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUnidadComponent } from './detalle.component';

describe('DetalleUnidadComponent', () => {
  let component: DetalleUnidadComponent;
  let fixture: ComponentFixture<DetalleUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
