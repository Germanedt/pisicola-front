import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarParametroComponent } from './modificar.component';

describe('ModificarParametroComponent', () => {
  let component: ModificarParametroComponent;
  let fixture: ComponentFixture<ModificarParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
