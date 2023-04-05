import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGastoComponent } from './agregar.component';

describe('AgregarGastoComponent', () => {
  let component: AgregarGastoComponent;
  let fixture: ComponentFixture<AgregarGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
