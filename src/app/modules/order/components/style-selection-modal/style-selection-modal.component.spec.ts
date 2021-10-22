import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSelectionModalComponent } from './style-selection-modal.component';

describe('StyleSelectionModalComponent', () => {
  let component: StyleSelectionModalComponent;
  let fixture: ComponentFixture<StyleSelectionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSelectionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSelectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
