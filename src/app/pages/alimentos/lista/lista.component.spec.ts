import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlimentosComponent } from './lista.component';

describe('ListaAlimentosComponent', () => {
  let component: ListaAlimentosComponent;
  let fixture: ComponentFixture<ListaAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
