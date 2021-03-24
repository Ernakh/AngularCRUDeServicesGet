import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosServicoService {

  constructor(private http:HttpClient) { }

  public getFotos():Observable<any>
  {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  public getFotosByAlbum(id):Observable<any>
  {
    console.log('servico id =', id);
    console.log('https://jsonplaceholder.typicode.com/photos?albumId='+id);
    //return this.http.get('https://jsonplaceholder.typicode.com/photos');
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+id);
  }

}
