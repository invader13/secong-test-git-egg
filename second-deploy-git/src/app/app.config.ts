import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {withHttpTransferCacheOptions} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch()),
    provideRouter(routes),
    provideAnimationsAsync()]
};
