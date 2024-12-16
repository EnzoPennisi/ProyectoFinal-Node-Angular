import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private url = 'http://localhost:4000/api/categorias';

  constructor(private http:HttpClient) { }

  public getCategorias(){
    return this.http.get(this.url)
  }
}
