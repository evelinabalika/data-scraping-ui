import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessmanipulationComponent } from './processmanipulation.component';

describe('ProcessmanipulationComponent', () => {
  let component: ProcessmanipulationComponent;
  let fixture: ComponentFixture<ProcessmanipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessmanipulationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessmanipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
