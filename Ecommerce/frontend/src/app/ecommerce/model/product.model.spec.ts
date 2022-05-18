import { Product } from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(0,"name", 1.56,"https:url.ico")).toBeTruthy();
  });
});
