import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIpoDetailsComponent } from './update-ipo-details.component';

describe('UpdateIpoDetailsComponent', () => {
  let component: UpdateIpoDetailsComponent;
  let fixture: ComponentFixture<UpdateIpoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIpoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIpoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
