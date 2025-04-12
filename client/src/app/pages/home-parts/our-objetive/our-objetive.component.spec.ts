import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurObjetiveComponent } from './our-objetive.component';

describe('OurObjetiveComponent', () => {
  let component: OurObjetiveComponent;
  let fixture: ComponentFixture<OurObjetiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurObjetiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurObjetiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
