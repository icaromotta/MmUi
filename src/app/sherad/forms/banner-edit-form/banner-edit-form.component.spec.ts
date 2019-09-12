import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEditFormComponent } from './banner-edit-form.component';

describe('BannerEditFormComponent', () => {
  let component: BannerEditFormComponent;
  let fixture: ComponentFixture<BannerEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
