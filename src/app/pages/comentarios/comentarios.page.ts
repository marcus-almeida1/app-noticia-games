import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton, ModalController, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonIcon, IonText } from '@ionic/angular/standalone';
import { comentarioData } from 'src/app/types/comentarioData';
import { ComentarioService } from 'src/app/services/comentario.service';
import { CadastroComentarioComponent } from 'src/app/components/cadastro-comentario/cadastro-comentario.component';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
  standalone: true,
  imports: [IonText, IonIcon, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonButton, IonLabel, IonItem, IonList, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ComentariosPage implements OnInit {

   public comentarios: comentarioData[] = []

  private modalController = inject(ModalController)
  private comentarioService = inject(ComentarioService)
  
  ngOnInit() {
    this.carregarComentarios();
  }
 
  public async abrirAdicionar(comentario?: comentarioData) {
    const modal = await this.modalController.create({
      component: CadastroComentarioComponent,
      breakpoints: [0.5, 0.75, 0.95],
      initialBreakpoint: 0.75,
      componentProps: {
        comentario: comentario
      }
    })
 
    modal.present()
 
    modal.onDidDismiss().then(() => {
      this.carregarComentarios();
    });
  }
 
  public async carregarComentarios() {
    this.comentarios = await this.comentarioService.buscarTodos();
  }
}
