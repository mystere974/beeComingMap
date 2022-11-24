import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCapitalComponent } from './new-capital.component';

describe('NewCapitalComponent', () => {
  let component: NewCapitalComponent;
  let fixture: ComponentFixture<NewCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
