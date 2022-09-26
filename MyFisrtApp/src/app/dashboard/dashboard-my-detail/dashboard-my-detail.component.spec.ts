import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMyDetailComponent } from './dashboard-my-detail.component';

describe('DashboardMyDetailComponent', () => {
  let component: DashboardMyDetailComponent;
  let fixture: ComponentFixture<DashboardMyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
