import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineStyleTemplateComponent } from './inline-style-template.component';

describe('InlineStyleTemplateComponent', () => {
  let component: InlineStyleTemplateComponent;
  let fixture: ComponentFixture<InlineStyleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineStyleTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineStyleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
