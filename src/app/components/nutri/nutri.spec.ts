import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutri } from './nutri';

describe('Nutri', () => {
  let component: Nutri;
  let fixture: ComponentFixture<Nutri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nutri],
    }).compileComponents();

    fixture = TestBed.createComponent(Nutri);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
