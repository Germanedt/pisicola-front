import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInsumosComponent } from './lista.component';

describe('ListaInsumosComponent', () => {
  let component: ListaInsumosComponent;
  let fixture: ComponentFixture<ListaInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInsumosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
