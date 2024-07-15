import { inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRouteSnapshot } from '@angular/router';

export const getProduct = (route: ActivatedRouteSnapshot) => {
  const ProductService = inject(ProductsService);
  return ProductService.get(route.paramMap.get('id') as string);
};
