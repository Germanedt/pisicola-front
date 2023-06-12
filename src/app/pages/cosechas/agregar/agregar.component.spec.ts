import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCosechaComponent } from './agregar.component';

describe('AgregarCosechaComponent', () => {
  let component: AgregarCosechaComponent;
  let fixture: ComponentFixture<AgregarCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCosechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
