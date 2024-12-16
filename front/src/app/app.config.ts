import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { globalText } from './data/text';
import { provideHttpClient } from '@angular/common/http';
import { globalUrl } from './data/url';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    globalText,
    globalUrl
  ]
};