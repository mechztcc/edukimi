import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDataBaseComponent } from './card-data-base.component';

describe('CardDataBaseComponent', () => {
  let component: CardDataBaseComponent;
  let fixture: ComponentFixture<CardDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDataBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
