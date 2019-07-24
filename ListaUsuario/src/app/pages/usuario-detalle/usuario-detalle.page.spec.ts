import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetallePage } from './usuario-detalle.page';

describe('UsuarioDetallePage', () => {
  let component: UsuarioDetallePage;
  let fixture: ComponentFixture<UsuarioDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
