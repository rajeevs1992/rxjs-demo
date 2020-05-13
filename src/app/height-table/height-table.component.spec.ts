import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightTableComponent } from './height-table.component';

describe('HeightTableComponent', () => {
  let component: HeightTableComponent;
  let fixture: ComponentFixture<HeightTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
