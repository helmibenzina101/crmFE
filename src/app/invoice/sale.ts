import { Product } from "../product/product";
import { Invoice } from "./invoice";

export interface Sale {

    id: number ;  
	quantity: number; 
	price: number;
    tax: number;
    discount: number;
    invoice: Invoice ; 
    product: Product;

}
