import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "../../components/pages/dashboard/dashboard.component";
import { NotFoundPage } from "../../components/pages/not-found/not-found-page.component";
import { TestPage } from "../../components/pages/test/test.component";
import { routePath } from "./path";

export interface INavigationItem {
  title: string;
  routerLink?: string;
}

const routes: Routes = [
  {
    path: routePath.main,
    component: DashboardPage,
  },
  {
    path: routePath.test,
    component: TestPage,
  },
  {
    path: "**",
    redirectTo: routePath.notFound,
  },
  {
    path: routePath.notFound,
    component: NotFoundPage,
  },
];

export const routeLinks: INavigationItem[] = [
  {
    title: "Главная",
    routerLink: "/",
  },
  {
    title: "Тестовая страница",
    routerLink: "/test",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
