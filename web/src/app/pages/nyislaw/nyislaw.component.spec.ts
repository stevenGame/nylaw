import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyislawComponent } from './nyislaw.component';

describe('NyislawComponent', () => {
  let component: NyislawComponent;
  let fixture: ComponentFixture<NyislawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyislawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyislawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
