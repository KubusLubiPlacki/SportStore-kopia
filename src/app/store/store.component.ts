import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector:"store",
    templateUrl:"store.component.html"
})  
export class StoreComponent{
    public selectedCategory:string="";
    public productsPerPage=4;
    public selectedPage=1;
    constructor(private repository:ProductRepository,
        private cart:Cart,
        private router:Router){}
    get products():Product[]{
        let pageIndex=(this.selectedPage-1)*this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex,pageIndex+this.productsPerPage);
    }
    get categories():string[]{
        return this.repository.getCategories();
    }
    changeCategory(newCategory:string){
       this.selectedCategory=newCategory;
    }
    changePage(newPage:number){
        this.selectedPage=newPage;
    }
    changePageSize(newSize:Event){
            this.productsPerPage=parseInt((newSize.target as HTMLSelectElement).value);
    }
    // get pageCount():number{
    //     return Math.ceil(this.repository
    //         .getProducts(this.selectedCategory).length/this.productsPerPage)
    // }not working!
    get pageNumbers():number[]{
        return Array(Math.ceil(this.repository
            .getProducts(this.selectedCategory).length/this.productsPerPage))
                .fill(0).map((x,i)=>i+1);
    }
    addProductToCart(product:Product){
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
}