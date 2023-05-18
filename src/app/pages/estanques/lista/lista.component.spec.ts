import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstanqueComponent } from './lista.component';

describe('ListaEstanqueComponent', () => {
  let component: ListaEstanqueComponent;
  let fixture: ComponentFixture<ListaEstanqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstanqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
