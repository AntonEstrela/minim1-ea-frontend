import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrotesComponent } from './brotes.component';

describe('BrotesComponent', () => {
  let component: BrotesComponent;
  let fixture: ComponentFixture<BrotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
