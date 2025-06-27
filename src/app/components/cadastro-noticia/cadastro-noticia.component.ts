import { Component, inject, Input, OnInit } from '@angular/core';
import { noticiaData } from 'src/app/types/noticiaData';
import { ModalController, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem, IonInput, IonButton, IonIcon, IonTextarea } from '@ionic/angular/standalone';
import { NoticiaService } from 'src/app/services/noticia.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-noticia',
  templateUrl: './cadastro-noticia.component.html',
  styleUrls: ['./cadastro-noticia.component.scss'],
  imports: [IonTextarea, IonIcon, IonButton, IonInput, IonItem, IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonContent, FormsModule],
  
standalone: true
})
export class CadastroNoticiaComponent  implements OnInit {

  @Input() noticia!: noticiaData;
 
  private modalController = inject(ModalController)
  private noticiaService = inject(NoticiaService)
 
  ngOnInit(): void {
    if (!this.noticia) {
      this.noticia = {
        id: 0,
        titulo: '',
        data: new Date(),
        conteudo: '',
        imagem: '',
        curtido: false,
        naoCurtido: false
      };
    }
  }
 
  public async salvar() {
    await this.noticiaService.salvar(this.noticia);
    this.modalController.dismiss();
  }
}
