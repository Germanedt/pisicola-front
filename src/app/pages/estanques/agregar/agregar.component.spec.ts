import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstanqueComponent } from './agregar.component';

describe('AgregarEstanqueComponent', () => {
  let component: AgregarEstanqueComponent;
  let fixture: ComponentFixture<AgregarEstanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
