import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/product/product";
import { ProductService } from "src/app/product/product.service";

import { Sale } from '../sale';
import { SaleService } from "../sale.service";

@Component({
  selector: 'app-createsale',
  templateUrl: './createsale.component.html',
  styleUrls: ['./createsale.component.css']
})
export class CreatesaleComponent implements OnInit{
    allProducts: Product[]=[];
    currentProduct!: Product;
      saleForm: Sale = {

        id: 0,
        quantity: 0,
        price: 0,
          tax: 0,
          discount: 0,
          invoice: {
            id: 0 ,  
            total: 0,
              tax: 0,
              stamp: 0,
              date: new Date(),
              discount: 0,
              client: {
                id : 0,
                nameClient : '' ,
                email:''
              } ,     
          } , 
          product: {
            id:0,
            name:'',
            price:0,
            tax:0
          },
        


      };

    
      constructor(private saleService:SaleService,
        private productService: ProductService,
        private router:Router) {}
     
      ngOnInit(): void {
        
        this.get();
    
      }
      get()
      {
        this.productService.get().subscribe((data)=>{this.allProducts=data;
         // console.log(data);
      });
    }

    onChangeName(e:any): void {
    console.log("idProduct  : ",e.target.value);
      this.productService.getById(this.saleForm.product.id).subscribe((data)=>{
        console.log("data : ", data);
        this.currentProduct=data;
        this.saleForm.product = data;
        console.log("price : ", this.saleForm.price);
     });
     //this.saleForm.product = this.currentProduct;
     
    }

     /*
      create(): void{
        this.saleService.create(this.saleForm)
        .subscribe({
          next:(data: any) => {
            console.log('saving sale ');
           // this.router.navigate(["/sale/home"])
          },
          error:(err: any) => {
            console.log(err);
          }
        });
      }
      */
    }
