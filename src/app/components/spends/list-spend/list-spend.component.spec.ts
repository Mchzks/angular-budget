import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpendComponent } from './list-spend.component';

describe('ListSpendComponent', () => {
  let component: ListSpendComponent;
  let fixture: ComponentFixture<ListSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSpendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
