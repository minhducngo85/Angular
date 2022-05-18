import { Product } from "./product.model";

export class ProductOrder {
    product: Product;
    quantity: number;
    totalPrice: number | undefined;

    constructor(product: Product, quantity: number, totalPrice?: number) {
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
}
