import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaParametrosComponent } from './lista.component';

describe('ListaParametrosComponent', () => {
  let component: ListaParametrosComponent;
  let fixture: ComponentFixture<ListaParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
