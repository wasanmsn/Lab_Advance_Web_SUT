import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { SigninComponent } from './components/signin/signin.component'
import { ProductsComponent } from './components/products/products.component'
const routes: Routes =[
  {path: 'signin', component:SigninComponent},
  {path:'products',component:ProductsComponent},
  {path:'',redirectTo:'signin',pathMatch:'full'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
