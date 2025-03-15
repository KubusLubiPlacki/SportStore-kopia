import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports:[ModelModule,BrowserModule,RouterModule,FormsModule],
    declarations:[StoreComponent,CounterDirective,CartSummaryComponent,CartDetailComponent,CheckoutComponent],
    exports:[StoreComponent,CartDetailComponent,CheckoutComponent]
})
export class StoreModule{}