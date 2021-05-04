import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntenaComponent } from './antena.component';

describe('AntenaComponent', () => {
  let component: AntenaComponent;
  let fixture: ComponentFixture<AntenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
