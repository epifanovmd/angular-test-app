import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardPage } from "./dashboard/dashboard.component";
import { NotFoundPage } from "./not-found/not-found-page.component";
import { TestPage } from "./test/test.component";

const pages = [DashboardPage, NotFoundPage, TestPage];

@NgModule({
  declarations: [...pages],
  imports: [RouterModule, CommonModule],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
