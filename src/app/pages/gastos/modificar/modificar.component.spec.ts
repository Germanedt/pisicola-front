import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarGastoComponent } from './modificar.component';

describe('ModificarGastoComponent', () => {
  let component: ModificarGastoComponent;
  let fixture: ComponentFixture<ModificarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
