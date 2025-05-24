import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChordsDetailPage } from './chords-detail.page';

describe('ChordsDetailPage', () => {
  let component: ChordsDetailPage;
  let fixture: ComponentFixture<ChordsDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
