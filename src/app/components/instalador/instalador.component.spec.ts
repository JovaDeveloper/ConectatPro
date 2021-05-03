import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaladorComponent } from './instalador.component';

describe('InstaladorComponent', () => {
  let component: InstaladorComponent;
  let fixture: ComponentFixture<InstaladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
