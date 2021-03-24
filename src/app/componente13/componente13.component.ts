import { FotosServicoService } from './../services/fotos-servico.service';
import { Component, OnInit } from '@angular/core';
import { Images } from '../models/Images.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente13',
  templateUrl: './componente13.component.html',
  styleUrls: ['./componente13.component.css']
})
export class Componente13Component implements OnInit {

  images:Images;
  erro:any;

  id:string;

  constructor(private FotosServico: FotosServicoService, private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    /*this.id = this.activatedRoute.queryParams.subscribe(
      params => {
        this.id = params['albumId'];
        console.log(this.id);
      }
    );*/

    this.id = this.activatedRoute.snapshot.queryParams["albumId"];
    console.log(this.id);

    this.getter2();
  }

  getter()
  {
    this.FotosServico.getFotos().subscribe(
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

  getter2()
  {
    console.log('getter2');
    console.log(this.id);
    this.FotosServico.getFotosByAlbum(this.id).subscribe(
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
