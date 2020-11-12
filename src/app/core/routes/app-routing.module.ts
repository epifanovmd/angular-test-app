import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "../../components/pages/dashboard/dashboard.component";
import { NotFoundPage } from "../../components/pages/not-found/not-found-page.component";
import { TestPage } from "../../components/pages/test/test.component";
import { routePath } from "./path";
import { UsersPage } from "../../components/pages/users/users.component";

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
    path: routePath.users,
    component: UsersPage,
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
  {
    title: "Пользователи",
    routerLink: "/users",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
