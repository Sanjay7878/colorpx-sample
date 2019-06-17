import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms'

//importing routing statments
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'

//importing MDB bootstrap
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { GalleryViewComponent } from './gallery-view/gallery-view.component'

//importing toaster
import {ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    GalleryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'gallery',component:GalleryComponent},
      {path:'about',component:AboutComponent},
      {path:'contactUs',component:ContactComponent},
      {path:'**',component:NotFoundComponent}
    ]),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
