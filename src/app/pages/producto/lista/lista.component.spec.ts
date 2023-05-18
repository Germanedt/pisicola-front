import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstanquesComponent } from './lista.component';

describe('ListaUsuariosComponent', () => {
  let component: ListaEstanquesComponent;
  let fixture: ComponentFixture<ListaEstanquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstanquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstanquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
