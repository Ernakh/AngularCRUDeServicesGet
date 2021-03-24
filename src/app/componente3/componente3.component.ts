import { FotosServicoService } from './../services/fotos-servico.service';
import { Component, OnInit } from '@angular/core';
import { Images } from '../models/Images.model';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit
{

  images:Images;
  erro:any;

  constructor(private fotosServico: FotosServicoService)
  {
    this.getter();
  }

  ngOnInit(): void
  {
  }

  getter()
  {
    this.fotosServico.getFotos().subscribe(
      //data =>
      (data: Images) =>
      {
        this.images = data;
        console.log('Variavel preenchida:', this.images)
        console.log('recebido: ', data)
        //}, error =>
      }, (error: any) =>
      {
        this.erro = error;
        console.error('ERROOO:', error);
      }
    );
  }

}
