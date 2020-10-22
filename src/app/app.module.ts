import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./core/routes/app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { AppStoreModule } from "./store/store.modeule";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, AppStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
