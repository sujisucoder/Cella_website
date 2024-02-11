import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { AllBrandsComponent } from './all-brands/all-brands.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: BrandsComponent,
    path: 'brands',
   
    children: [
      {
        path: 'brand-detail',
        component: BrandDetailComponent,
      },
      {
        path: '',
        component: AllBrandsComponent,
      }
    ]
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
