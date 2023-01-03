import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescrComponent } from './card-descr.component';

describe('CardDescrComponent', () => {
  let component: CardDescrComponent;
  let fixture: ComponentFixture<CardDescrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDescrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
