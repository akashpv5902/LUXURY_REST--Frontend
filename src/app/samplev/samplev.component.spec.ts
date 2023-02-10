import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplevComponent } from './samplev.component';

describe('SamplevComponent', () => {
  let component: SamplevComponent;
  let fixture: ComponentFixture<SamplevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
