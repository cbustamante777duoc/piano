import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

 /**
  * function que va a reproducir los sonidos que van a ser enviados desde el html
  * @param numero lo recibe el parametro que esta en el html
  */
  aplicarSonido(numero: number):void{
    const audio = new Audio();//instance
    audio.src = `../assets/sonidos/note${numero}.wav`//src sonido
    audio.load();//carga el sonido
    audio.play();//da play al sonid
  }
}
