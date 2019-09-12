import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCreatorComponent } from './banner-creator.component';

describe('BannerCreatorComponent', () => {
  let component: BannerCreatorComponent;
  let fixture: ComponentFixture<BannerCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
