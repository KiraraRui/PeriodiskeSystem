import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementGuiComponent } from './element-gui.component';

describe('ElementGuiComponent', () => {
  let component: ElementGuiComponent;
  let fixture: ComponentFixture<ElementGuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementGuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementGuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
