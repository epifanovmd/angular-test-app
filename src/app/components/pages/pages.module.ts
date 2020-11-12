import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DashboardPage } from "./dashboard/dashboard.component";
import { NotFoundPage } from "./not-found/not-found-page.component";
import { TestPage } from "./test/test.component";
import { UiComponentsModule } from "../ui/ui-components.module";
import { UsersPage } from "./users/users.component";
import { ListsComponentsModule } from "../lists/lists-components.module";

const pages = [DashboardPage, NotFoundPage, TestPage, UsersPage];

@NgModule({
  declarations: [...pages],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    UiComponentsModule,
    ListsComponentsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
