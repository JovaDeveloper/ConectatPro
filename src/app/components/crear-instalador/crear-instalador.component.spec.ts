import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInstaladorComponent } from './crear-instalador.component';

describe('CrearInstaladorComponent', () => {
  let component: CrearInstaladorComponent;
  let fixture: ComponentFixture<CrearInstaladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInstaladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInstaladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
