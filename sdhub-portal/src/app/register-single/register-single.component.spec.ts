import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSingleComponent } from './register-single.component';

describe('RegisterSingleComponent', () => {
  let component: RegisterSingleComponent;
  let fixture: ComponentFixture<RegisterSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
