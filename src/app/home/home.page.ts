import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonItem, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { thumbsUpOutline, thumbsDownOutline } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonItem, IonButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    addIcons({thumbsUpOutline, thumbsDownOutline})
  }

  curtido = false;
  naoCurtido = false;

  curtir() {
    this.curtido = !this.curtido;
    
    if (this.curtido) {
      this.naoCurtido = false;
    }
  }

  naoCurtir() {
    this.naoCurtido = !this.naoCurtido;

    if (this.naoCurtido) {
      this.curtido = false;
    }
  }
}
