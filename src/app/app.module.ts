import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './components/tags/tags.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { CardComponent } from './components/card-main/card/card.component';

@NgModule({
  declarations: [AppComponent, MainComponent, TagsComponent, TagListComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, MatDividerModule, BrowserAnimationsModule, FontAwesomeModule,  HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
