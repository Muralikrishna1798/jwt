import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../_model/product.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../_services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [MatInputModule,CommonModule,MatFormFieldModule,MatGridListModule,MatButtonModule,FormsModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent implements OnInit{


  product:Product = {
    productName:"",
    productDiscountedPrice:0,
    productActualPrice:0,
    productDescription:"",
    productImages:[]
  }
  constructor(private productservice: ProductService,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    
  }

  addProduct(productForm: NgForm){
    const productFormData = this.prepareFormData(this.product);
    this.productservice.addProduct(productFormData).subscribe(
      (res:Product) => {
        productForm.reset();
        this.product.productImages = [];
        console.log(res)
      },(error:HttpErrorResponse) => {
        console.log(error)
      }
    );
  }

  prepareFormData(product: Product):FormData {
    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)],{type:'application/json'})
    );
    for(var i=0; i<product.productImages.length; i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    } 
    return formData;
  }

  onFileSelected(event:any){
    if(event.target.files){
      const fileval = event.target.files[0];


      const fileHandle: any = {
        file: fileval,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(fileval)
        )
      }
      this.product.productImages.push(fileHandle);
    }
  }

  removeImages(i: number){
 this.product.productImages.splice(i,1);
  }

  fileDropped(fileHandle:any){
    this.product.productImages.push(fileHandle);
  }
}
