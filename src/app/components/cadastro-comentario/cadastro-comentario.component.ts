import { Component, inject, Input, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/services/comentario.service';
import { comentarioData } from 'src/app/types/comentarioData';
import { ModalController, IonContent, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton, IonIcon, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-comentario',
  templateUrl: './cadastro-comentario.component.html',
  styleUrls: ['./cadastro-comentario.component.scss'],
  imports: [IonIcon, IonButton, IonItem, IonInput, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonContent, IonTextarea, FormsModule]
})

export class CadastroComentarioComponent  implements OnInit {

  @Input() comentario!: comentarioData;
 
  private modalController = inject(ModalController)
  private comentarioService = inject(ComentarioService)
 
  ngOnInit(): void {
    if (!this.comentario) {
      this.comentario = {
        id: 0,
        texto: '',
        autor: '',
        dataComentario: new Date(),
      };
    }
  }
 
  public async salvarComentario() {
    await this.comentarioService.salvar(this.comentario);
    this.modalController.dismiss();
  }
}
