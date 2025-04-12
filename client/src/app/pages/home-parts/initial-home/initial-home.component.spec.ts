import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialHomeComponent } from './initial-home.component';

describe('InitialHomeComponent', () => {
  let component: InitialHomeComponent;
  let fixture: ComponentFixture<InitialHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
