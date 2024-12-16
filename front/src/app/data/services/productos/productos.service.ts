import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  private url = "http://localhost:4000/api/productos/"

  constructor(private http: HttpClient) { }

  public getProductsByCategory(idCategoria: string){
    return this.http.get(this.url + idCategoria)
  }

  public deleteProduct(idProducto: string){
    return this.http.delete(this.url + idProducto)
  }

  public createProduct(product: Product) : Observable<any>{
    return this.http.post(this.url, product)
  }

  public updateProduct(idProduct:number, product: Product) : Observable<any>{
    return this.http.patch(this.url + idProduct, product)
  }
}
