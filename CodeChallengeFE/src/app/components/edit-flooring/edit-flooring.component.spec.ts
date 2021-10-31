import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlooringComponent } from './edit-flooring.component';

describe('EditFlooringComponent', () => {
  let component: EditFlooringComponent;
  let fixture: ComponentFixture<EditFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
