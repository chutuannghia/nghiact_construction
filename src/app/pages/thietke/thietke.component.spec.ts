import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThietkeComponent } from './thietke.component';

describe('ThietkeComponent', () => {
  let component: ThietkeComponent;
  let fixture: ComponentFixture<ThietkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThietkeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThietkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
