import { Client } from "../client/client";

export interface Invoice {

    id: number ;   
	total: number;
    tax: number;
    stamp: number;
    date: Date;
    discount: number;
    client: Client ; 

    
}
