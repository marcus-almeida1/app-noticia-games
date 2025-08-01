import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle, chatbubbleEllipses, createOutline, saveOutline, thumbsDown, thumbsUp, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({thumbsUp, thumbsDown, trashOutline, saveOutline, addCircle, createOutline, chatbubbleEllipses})
  }
}
