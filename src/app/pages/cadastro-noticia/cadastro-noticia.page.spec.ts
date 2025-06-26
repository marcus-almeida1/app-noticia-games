import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroNoticiaPage } from './cadastro-noticia.page';

describe('CadastroNoticiaPage', () => {
  let component: CadastroNoticiaPage;
  let fixture: ComponentFixture<CadastroNoticiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
