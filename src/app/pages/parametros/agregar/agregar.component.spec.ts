import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarParametroComponent } from './agregar.component';

describe('AgregarTipoProductoComponent', () => {
  let component: AgregarParametroComponent;
  let fixture: ComponentFixture<AgregarParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
