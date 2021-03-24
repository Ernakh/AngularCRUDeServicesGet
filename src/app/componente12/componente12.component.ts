import { Album } from './../models/Album.model';
import { Servico2Service } from './../services/servico2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente12',
  templateUrl: './componente12.component.html',
  styleUrls: ['./componente12.component.css']
})
export class Componente12Component implements OnInit {

  albuns:Album;
  erro:any;

  id:string;

  constructor(private albumServico: Servico2Service)
  {
    this.getter();
  }

  ngOnInit(): void
  {

  }

  getter()
  {
    this.albumServico.getAlbuns().subscribe(
      //data =>
      (data: Album) =>
      {
        this.albuns = data;
        console.log('Variavel preenchida:', this.albuns)
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
