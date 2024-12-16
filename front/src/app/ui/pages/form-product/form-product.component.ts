import { Component } from '@angular/core';
import { Category, Product } from '../../../types/types';
import { Router } from '@angular/router';
import { ProductosService } from '../../../data/services/productos/productos.service';
import { FormsModule } from '@angular/forms';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { globalUrl } from '../../../data/url';
import { globalText } from '../../../data/text';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {

  public product: Product = {
    id: 0,
    nombre: '',
    fecha_vencimiento: '',
    stock: 0,
    precio: 0,
    url_img: '',
    id_categoria: 0
  };

  public category: Category = {
    id: 0,
    nombre: ''
  };

  constructor(
    public router: Router,
    public productoService: ProductosService,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: globalUrl,
    public globalText: globalText,
  ) {
    const navegabilidad = this.router.getCurrentNavigation();

    if (navegabilidad?.extras?.state) {
      const data = navegabilidad.extras.state;

      this.product = data['product'] || this.product;
      this.category = data['category'];
      this.product.id_categoria = this.category.id;
    }
  }

  saveProduct() {
    if (!this.product.nombre || 
        !this.product.fecha_vencimiento || 
        !this.product.stock || 
        !this.product.precio ||
        !this.product.url_img) {
      alert('Faltan campos por llenar');
      return;
    }

    if (this.product.id === 0) {
      this.productoService.createProduct(this.product).subscribe(result => {
        console.log(result)
      });
    } else {
      this.productoService.updateProduct(this.product.id, this.product).subscribe(result => {
        console.log(result)
      })
    }

    this.urlNavigateService.navigateUrlWithData(this.globalUrl.products,{
      state: {
        category: this.category
      }
    });
  }
}
