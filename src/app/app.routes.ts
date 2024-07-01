import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ProductsService } from './shared/services/products.service';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      // LazyLoading
      import('./features/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const ProductService = inject(ProductsService);
        return ProductService.get(route.paramMap.get('id') as string);
      },
    },
    loadComponent: () =>
      // LazyLoading
      import('./features/edit/edit.component').then((m) => m.EditComponent),
  },
];
