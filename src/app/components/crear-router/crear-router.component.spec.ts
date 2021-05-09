import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRouterComponent } from './crear-router.component';

describe('CrearRouterComponent', () => {
  let component: CrearRouterComponent;
  let fixture: ComponentFixture<CrearRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
