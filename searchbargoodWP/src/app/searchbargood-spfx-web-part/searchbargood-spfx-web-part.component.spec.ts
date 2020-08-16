import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbargoodSpfxWebPartComponent } from './searchbargood-spfx-web-part.component';

describe('SearchbargoodSpfxWebPartComponent', () => {
  let component: SearchbargoodSpfxWebPartComponent;
  let fixture: ComponentFixture<SearchbargoodSpfxWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbargoodSpfxWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbargoodSpfxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
