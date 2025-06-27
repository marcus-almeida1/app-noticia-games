import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { noticiaData } from '../types/noticiaData';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {

  private readonly chave = 'noticias';
 
  public async buscarTodos(): Promise<noticiaData[]> {
    const noticias = await Preferences.get({ key: this.chave });
    return noticias && noticias.value ? JSON.parse(noticias.value) : [];
  }
 
  public async salvar(noticia: noticiaData) {
    if (noticia.id && noticia.id > 0) {
      return this.atualizar(noticia);
    }
    const noticias = await this.buscarTodos();
    const id = noticias.length + 1;
    noticias.push({ ...noticia, id });
    await Preferences.set({ key: this.chave, value: JSON.stringify(noticias) });
  }
 
  public async excluir(noticia: noticiaData) {
    let noticias = await this.buscarTodos();
    noticias = noticias.filter(a => a.id !== noticia.id);
    await Preferences.set({ key: this.chave, value: JSON.stringify(noticias) });
  }
 
  public async atualizar(noticia: noticiaData) {
    const noticias = await this.buscarTodos();
    const index = noticias.findIndex(a => a.id === noticia.id);
    if (index !== -1) {
      noticias[index] = noticia;
      await Preferences.set({ key: this.chave, value: JSON.stringify(noticias) });
    }
  }
}
