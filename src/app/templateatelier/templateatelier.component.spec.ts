import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateatelierComponent } from './templateatelier.component';

describe('TemplateatelierComponent', () => {
  let component: TemplateatelierComponent;
  let fixture: ComponentFixture<TemplateatelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateatelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateatelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
