import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiteComponent } from './bite.component';

describe('BiteComponent', () => {
  let component: BiteComponent;
  let fixture: ComponentFixture<BiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
