import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';


const routes: Routes = [
  { path: 'addproduct', component: AddproductComponent },
  { path: 'showproducts', component: ShowproductsComponent },
  {
    path: '',
    redirectTo: 'showproducts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }