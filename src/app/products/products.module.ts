//services
import * as fromServices from "./services";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [],
  providers: [...fromServices.services]
})
export class ProductsModule {}
