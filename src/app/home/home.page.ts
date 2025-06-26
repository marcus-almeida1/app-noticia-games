import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonItem, IonIcon, IonCardSubtitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { thumbsUpOutline, thumbsDownOutline } from 'ionicons/icons'

interface noticiaData {
  titulo: string;
  data: string;
  conteudo: string;
  imagem: string;
  curtido: boolean;
  naoCurtido: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardSubtitle, IonIcon, IonItem, IonButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {

  public noticias: noticiaData[] = [
    {
      titulo: 'Vitality vence de virada e é campeã do Blast Austin Major 2025',
      data: '22-06-2025',
      conteudo: 'O favoritismo venceu e a Vitality é a grande campeã do Blast Austin Major, provando que a "Era Vitality" é realidade. A equipe de Mathieu "ZywOo" Herbaut venceu a The MongolZ de virada por 2 a 1, e assim conquistou o segundo Major da organização e também seu 7° título seguido <br> <br> Com esse resultado a Vitality é campeã do Blast Austin Major 2025. Além do título, a equipe também receberá a premiação de US$ 500 mil (R$ 2,75 milhões).',
      imagem: 'https://img-cdn.hltv.org/gallerypicture/qjUeX5G2dBF6kftSVWADWu.jpg?ixlib=java-2.1.0&w=1200&s=3219aa021f35077b41f664210280ae0c',
      curtido: false,
      naoCurtido: false,
    },

    {
      titulo: 'Dupreeh anuncia aposentadoria',
      data: '22-06-2025',
      conteudo: 'Depois de uma carreira de mais de 10 anos, Peter "⁠dupreeh⁠" Rasmussen anunciou sua aposentadoria. O dinamarquês começou sua carreira em 2012, e desde então se tornou o mais vitorioso do CS, com um recorde de 32 torneios vencidos, sendo cinco deles Majors. <br> <br> "É hora de dizer adeus. Quando comecei a jogar Counter-Strike nunca imaginei que poderíamos juntar tantas pessoas, que tantas pessoas iriam acompanhar esse esport. Na época, meu único objetivo era fazer meu nome, e se eu vencesse apenas um Major isso já seria grande conquista. Hoje estou aqui com cinco títulos de Major. Acho que a única forma possível de finalizar minha carreira como jogador profissional seria no maio palco possível, na frente de todos vocês, antes de alguém conseguir ganhar o troféu", disse dupreeh⁠.',
      imagem: 'https://img-cdn.hltv.org/gallerypicture/2axSEuy2ul8Tij_P0pH5c2.jpg?ixlib=java-2.1.0&w=1200&s=76055cafcecf2d877c7981bab105e713',
      curtido: false,
      naoCurtido: false,
    },

    {
      titulo: 'Astro do Tottenham, Son é anunciado como novo personagem de Fortnite',
      data: '12-06-2025',
      conteudo: 'A Epic Games anunciou nesta quinta-feira (12) que o atacante Son Heung-min, do Tottenham e da seleção sul-coreana, ganhará uma skin oficial no Fortnite a partir das 21h do dia 20 de junho (de Brasília). A parceria marca mais uma ação do Battle Royale no universo dos esportes, desta vez com foco no público asiático. <br> <br> A colaboração com Son faz parte de uma estratégia da desenvolvedora para expandir a presença do jogo na Coreia do Sul. De acordo com Park Sung-chul, CEO da Epic Games Korea, a ideia é “aproximar Fortnite de influências culturais locais e ampliar o engajamento da comunidade gamer no país”.',
      imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/06/son.jpg?w=1200&h=900&crop=0',
      curtido: false,
      naoCurtido: false,
    },

    {
      titulo: 'Com apenas uma derrota em onze partidas, FURIA garante título mundial inédito no Rainbow Six',
      data: '18-05-2025',
      conteudo: 'As Panteras tiveram um único revés em todo o RELOAD. Na primeira fase da competição, vitórias contra Elevate, Team BDS e Team Secret. A equipe teve apenas uma derrota, para a Darkzero. Em confronto decisivo, mais um triunfo, agora contra a última campeã do Six Invitational, FaZe Clan. <br> <br> Na etapa final da competição, não houve equipes à altura da FURIA. Nas quartas-de-final, triunfo sobre a LOUD, por 2-0. O placar se repetiu contra outra equipe brasileira nas semifinais, a W7M. Por fim, vitória contra os japoneses da CAG Osaka, por 3-0.',
      imagem: 'https://noticias.maisesports.com.br/wp-content/uploads/2025/05/furia-campea-reload-1120x630.png',
      curtido: false,
      naoCurtido: false,
    },
  ]

  constructor() {
    addIcons({thumbsUpOutline, thumbsDownOutline})
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
