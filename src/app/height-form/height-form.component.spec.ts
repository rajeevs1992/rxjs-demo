import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightFormComponent } from './height-form.component';

describe('HeightFormComponent', () => {
  let component: HeightFormComponent;
  let fixture: ComponentFixture<HeightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
