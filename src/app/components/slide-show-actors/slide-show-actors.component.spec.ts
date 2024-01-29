import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowActorsComponent } from './slide-show-actors.component';

describe('SlideShowActorsComponent', () => {
  let component: SlideShowActorsComponent;
  let fixture: ComponentFixture<SlideShowActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideShowActorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideShowActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
