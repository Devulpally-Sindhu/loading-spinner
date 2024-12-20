import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emiter2Component } from './emiter2.component';

describe('Emiter2Component', () => {
  let component: Emiter2Component;
  let fixture: ComponentFixture<Emiter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Emiter2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Emiter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
