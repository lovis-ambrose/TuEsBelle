import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    title: "Tu Es Belle | Home",
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: "Tu Es Belle | Not Found",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
