import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpeDetialsComponent } from './recpe-detials.component';

describe('RecpeDetialsComponent', () => {
  let component: RecpeDetialsComponent;
  let fixture: ComponentFixture<RecpeDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecpeDetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecpeDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
