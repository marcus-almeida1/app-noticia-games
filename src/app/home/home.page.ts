import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonItem, IonIcon, IonCardSubtitle, ModalController, IonList } from '@ionic/angular/standalone';
import { noticiaData } from '../types/noticiaData';
import { NoticiaService } from '../services/noticia.service';
import { CadastroNoticiaComponent } from '../components/cadastro-noticia/cadastro-noticia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonList, IonCardSubtitle, IonIcon, IonItem, IonButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule, CommonModule],
})
export class HomePage {

  public noticias: noticiaData[] = []

  private modalController = inject(ModalController)
  private noticiaService = inject(NoticiaService)
  
  ngOnInit() {
    this.carregarNoticias();
  }
 
  public async abrirAdicionar(noticia?: noticiaData) {
    const modal = await this.modalController.create({
      component: CadastroNoticiaComponent,
      breakpoints: [0.5, 0.75, 0.95],
      initialBreakpoint: 0.75,
      componentProps: {
        noticia: noticia
      }
    })
 
    modal.present()
 
    modal.onDidDismiss().then(() => {
      this.carregarNoticias();
    });
  }
 
  public async carregarNoticias() {
    this.noticias = await this.noticiaService.buscarTodos();
  }
 
  public async excluirNoticia(noticia: noticiaData) {
    await this.noticiaService.excluir(noticia);
    this.carregarNoticias();
  }

  curtir(noticia: noticiaData) {
    noticia.curtido = !noticia.curtido;
   
    if (noticia.curtido) {
      noticia.naoCurtido = false;
    }
  }
 
  naoCurtir(noticia: noticiaData) {
    noticia.naoCurtido = !noticia.naoCurtido;
 
    if (noticia.naoCurtido) {
      noticia.curtido = false;
    }
  }
}
