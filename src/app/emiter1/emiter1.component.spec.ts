import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emiter1Component } from './emiter1.component';

describe('Emiter1Component', () => {
  let component: Emiter1Component;
  let fixture: ComponentFixture<Emiter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Emiter1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Emiter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
