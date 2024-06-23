import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTaskComponentComponent } from './api-task-component.component';

describe('ApiTaskComponentComponent', () => {
  let component: ApiTaskComponentComponent;
  let fixture: ComponentFixture<ApiTaskComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTaskComponentComponent]
    });
    fixture = TestBed.createComponent(ApiTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
