import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeSectionComponent } from './creative-section.component';

describe('CreativeSectionComponent', () => {
  let component: CreativeSectionComponent;
  let fixture: ComponentFixture<CreativeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
