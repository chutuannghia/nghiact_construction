import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownhouseComponent } from './townhouse.component';

describe('TownhouseComponent', () => {
  let component: TownhouseComponent;
  let fixture: ComponentFixture<TownhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownhouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
