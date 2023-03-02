import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../product';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  allsales: Sale[]=[];
  [x: string]: any;
    productForm: Product = {
      id: 0,
      name: '',
      price: 0,
      sale: {id:0, quantity:''}
    };
  
    constructor(private ProductService:ProductService,
      private router:Router, private saleservice:SaleService) {}
   
    ngOnInit(): void {
      this.get();
    }
    get()
    {
      this.saleservice.get().subscribe((data: Sale[])=>{this.allsales=data;
      });
    }
   
    create(): void{
      this["productService"].create(this.productForm)
      .subscribe({
        next:(data: any) => {
          this.router.navigate(["/products/home"])
        },
        error:(err: any) => {
          console.log(err);
        }
      })
}
