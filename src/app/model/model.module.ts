import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { provideHttpClient,withFetch } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { ConnectionService } from "./connection.service";

@NgModule({
    imports:[],
    providers:[provideHttpClient(withFetch()),ProductRepository,StaticDataSource,Cart,Order,OrderRepository,
        {provide:StaticDataSource,useClass:RestDataSource},RestDataSource,AuthService,ConnectionService
    ]   
})
export class ModelModule{}