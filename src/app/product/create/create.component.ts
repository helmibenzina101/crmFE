import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../product';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

    productForm: Product = {
      id: 0,
      name: '',
      price: 0,

    };
  
    constructor(private productService:ProductService,
      private router:Router) {}
   
    ngOnInit(): void {
  
    }

   
    create(): void{
      this.productService.create(this.productForm)
      .subscribe({
        next:(data: any) => {
          this.router.navigate(["/product/home"])
        },
        error:(err: any) => {
          console.log(err);
        }
      });
    }
  }
