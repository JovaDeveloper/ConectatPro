import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAntenaComponent } from './crear-antena.component';

describe('CrearAntenaComponent', () => {
  let component: CrearAntenaComponent;
  let fixture: ComponentFixture<CrearAntenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAntenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAntenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
