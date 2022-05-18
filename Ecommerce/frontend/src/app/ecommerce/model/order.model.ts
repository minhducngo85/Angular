import { ProductOrder } from './product-order.model';
export class Order {
    id: string;
    dateCreated : String;
    status : string;
    totalOrderPrice : number;
    numberOfProducts:number;
    orderProducts : ProductOrder[];
}
