import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkSliderComponent } from './artwork-slider.component';

describe('ArtworkSliderComponent', () => {
  let component: ArtworkSliderComponent;
  let fixture: ComponentFixture<ArtworkSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
