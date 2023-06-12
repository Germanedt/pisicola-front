import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCosechaComponent } from './lista.component';

describe('ListaCosechaComponent', () => {
  let component: ListaCosechaComponent;
  let fixture: ComponentFixture<ListaCosechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCosechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCosechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
