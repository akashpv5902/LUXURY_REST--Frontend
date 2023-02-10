import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PycComponent } from './pyc.component';

describe('PycComponent', () => {
  let component: PycComponent;
  let fixture: ComponentFixture<PycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
