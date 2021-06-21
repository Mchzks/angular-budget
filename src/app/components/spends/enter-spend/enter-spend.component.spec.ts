import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSpendComponent } from './enter-spend.component';

describe('EnterSpendComponent', () => {
  let component: EnterSpendComponent;
  let fixture: ComponentFixture<EnterSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterSpendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
