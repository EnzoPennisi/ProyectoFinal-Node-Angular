import { Component } from '@angular/core';
import { globalText } from '../../../data/text';
import { NavigationEnd, Router } from '@angular/router';
import { ProductosService } from '../../../data/services/productos/productos.service';
import { NgFor } from '@angular/common';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { globalUrl } from '../../../data/url';
import { Category, Product } from '../../../types/types';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  public category : Category = {
    id: 0,
    nombre: ""
  };

  products:any = [];

  constructor(
    public globalText: globalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: globalUrl,
    public router: Router,
    public productService: ProductosService,
  ) {
    const navegabilidad = this.router.getCurrentNavigation();

    if(navegabilidad && navegabilidad.extras && navegabilidad.extras.state){
      const data = navegabilidad.extras.state;
      this.category = data['category'];
    }

  }

  ngOnInit() {
    this.loadProducts();

    // Escuchar eventos de navegación y recargar datos
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === this.globalUrl.products) {
        this.loadProducts();
      }
    });
  }

  loadProducts() {
    this.productService.getProductsByCategory(this.category.id.toString()).subscribe(result => {
      this.products = result;
      console.log(this.products);
    });
  }

  deleteProduct(idProducto:any){

    const confirm = window.confirm("¿Estás seguro de eliminar este producto?");

    if(!confirm) return;

    this.productService.deleteProduct(idProducto).subscribe(result =>{
      console.log(result)
      location.reload();
    })
  }

  navigateForm(product?:Product){
    this.urlNavigateService.navigateUrlWithData(this.globalUrl.form,{
        state: {
          product,
          category: this.category
        }
      }
    );
  }
  
}
