import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoProductoComponent } from './agregar.component';

describe('AgregarTipoProductoComponent', () => {
  let component: AgregarTipoProductoComponent;
  let fixture: ComponentFixture<AgregarTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTipoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
