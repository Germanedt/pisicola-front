import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInsumoComponent } from './agregar.component';

describe('AgregarInsumoComponent', () => {
  let component: AgregarInsumoComponent;
  let fixture: ComponentFixture<AgregarInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInsumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
