import { Component, inject } from '@angular/core';
import { EnviaParaOBackEnd } from '../../service/envia-para-oback-end';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    nome: string = 'Carlos'
    mensagem: string = ''
    private enviar = inject(EnviaParaOBackEnd)
    testa(nome:string) : void{
       const retorno = this.enviar.enviar(nome)
       this.mensagem = retorno
    }
}
