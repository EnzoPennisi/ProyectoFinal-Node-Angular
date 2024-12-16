import { Component } from '@angular/core';
import { globalText } from '../../../data/text';
import { SliderComponent } from "../../components/slider/slider.component";
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { globalUrl } from '../../../data/url';
import { CategoriasService } from '../../../data/services/categorias/categorias.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categorias:any = []

  constructor(
    public globalText: globalText,
    public urlNavigateService: UrlNavigateService,
    public router: Router,
    public globalUrl: globalUrl,
    public categoriaService: CategoriasService
  ) {
    this.categoriaService.getCategorias().subscribe(result =>{
      this.categorias = result;
    })
  }

  navigateProducts(category:any){
    this.urlNavigateService.navigateUrlWithData(this.globalUrl.products,{
        state: {
          category
        }
      }
    );
  }
}
