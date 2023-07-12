import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdataComponent } from './fdata.component';

describe('FdataComponent', () => {
  let component: FdataComponent;
  let fixture: ComponentFixture<FdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FdataComponent]
    });
    fixture = TestBed.createComponent(FdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
