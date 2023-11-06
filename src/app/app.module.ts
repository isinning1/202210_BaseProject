import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { EditorialModule } from './editorial/editorial.module';
import { Author } from './author/author';
import { AuthorModule } from './author/author.module';
import { BookRoutingModule } from './book/book-routing.module';


@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   BookModule,
   EditorialModule,
   HttpClientModule,
   BookRoutingModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }