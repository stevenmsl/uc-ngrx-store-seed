import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
// components
import * as fromComponents from "./components";
// containers
import * as fromContainers from "./containers";
// services
import * as fromServices from "./services";
import { from } from "rxjs";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../in-memory-data.service";

// routes
export const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.ProductsComponent
  },
  {
    path: ":id",
    component: fromContainers.ProductItemComponent
  },
  {
    path: "new",
    component: fromContainers.ProductItemComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    /*
      You must import it here using forFeature method so 
      that the http requests can be property intercepted 
      for the service calls originated from the components resided in the module.
    */
    HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false //return entity
    })
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class ProductsModule {}
