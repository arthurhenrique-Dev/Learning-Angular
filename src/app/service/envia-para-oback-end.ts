import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaParaOBackEnd {
    enviar(nome: string) : string{
        return `Tudo enviado ${nome}`
    }
}
