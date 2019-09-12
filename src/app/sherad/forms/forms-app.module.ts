import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerFormComponent } from './banners-form/banner-form.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BannerEditFormComponent } from './banner-edit-form/banner-edit-form.component';


@NgModule({
  declarations: [
    BannerFormComponent,
    SearchFormComponent,
    BannerEditFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerFormComponent,
    SearchFormComponent,
    BannerEditFormComponent
  ]
})
export class FormsAppModule { }
