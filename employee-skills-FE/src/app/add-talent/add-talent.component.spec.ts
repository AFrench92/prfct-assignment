import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTalentComponent } from './add-talent.component';

describe('AddTalentComponent', () => {
  let component: AddTalentComponent;
  let fixture: ComponentFixture<AddTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTalentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
