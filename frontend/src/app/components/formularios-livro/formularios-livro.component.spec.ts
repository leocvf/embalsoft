import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosLivroComponent } from './formularios-livro.component';

describe('FormulariosLivroComponent', () => {
  let component: FormulariosLivroComponent;
  let fixture: ComponentFixture<FormulariosLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosLivroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
