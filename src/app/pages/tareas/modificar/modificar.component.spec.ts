import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTareaComponent } from './modificar.component';

describe('ModificarTareaComponent', () => {
  let component: ModificarTareaComponent;
  let fixture: ComponentFixture<ModificarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
