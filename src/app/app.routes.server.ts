import { RenderMode, ServerRoute } from '@angular/ssr';
import { HomeComponent } from './Components/home/home.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
];
