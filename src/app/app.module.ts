import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerCreatorComponent } from './components/banner-creator/banner-creator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerService } from './services/banner.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { BannerFormComponent } from './sherad/forms/banners-form/banner-form.component';
import { FormsAppModule } from './sherad/forms/forms-app.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    FormsAppModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
