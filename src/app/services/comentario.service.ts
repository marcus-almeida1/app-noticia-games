import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { comentarioData } from '../types/comentarioData';

@Injectable({
  providedIn: 'root'
})

export class ComentarioService {

  private readonly chave = 'comentarios';
 
  public async buscarTodos(): Promise<comentarioData[]> {
    const comentarios = await Preferences.get({ key: this.chave });
    return comentarios && comentarios.value ? JSON.parse(comentarios.value) : [];
  }
 
  public async salvar(comentario: comentarioData) {
    const comentarios = await this.buscarTodos();
    const id = comentarios.length + 1;
    comentarios.push({ ...comentario, id });
    await Preferences.set({ key: this.chave, value: JSON.stringify(comentarios) });
  }
}
