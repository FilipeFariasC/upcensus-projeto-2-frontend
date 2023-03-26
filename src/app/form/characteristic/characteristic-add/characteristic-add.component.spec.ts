import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicAddComponent } from './characteristic-add.component';

describe('CharacteristicAddComponent', () => {
  let component: CharacteristicAddComponent;
  let fixture: ComponentFixture<CharacteristicAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacteristicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
