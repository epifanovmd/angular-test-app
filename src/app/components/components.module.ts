import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonComponentsModule } from "./common/common-components.module";
import { NavigationComponent } from "./common/navigation/navigation.component";
import { PagesModule } from "./pages/pages.module";
import { UiComponentsModule } from "./ui/ui-components.module";
import { ListsComponentsModule } from "./lists/lists-components.module";

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    PagesModule,
    RouterModule,
    CommonComponentsModule,
    CommonModule,
    UiComponentsModule,
    ListsComponentsModule,
  ],
  exports: [NavigationComponent],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule {}
