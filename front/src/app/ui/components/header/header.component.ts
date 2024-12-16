import { Component } from '@angular/core';
import { globalText } from '../../../data/text';
import { UrlNavigateService } from '../../../services/url-navigate.service';
import { globalUrl } from '../../../data/url';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(
    public globalText: globalText,
    public urlNavigateService: UrlNavigateService,
    public globalUrl: globalUrl
  ) {}

  navegarHome(){
    this.urlNavigateService.navigateUrl('/home');
  }
}
