import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middleware } from './middleware';

describe('Middleware', () => {
  let component: Middleware;
  let fixture: ComponentFixture<Middleware>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Middleware],
    }).compileComponents();

    fixture = TestBed.createComponent(Middleware);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
