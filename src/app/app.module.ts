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
import { ButtonComponent } from './components/card-main/button/button.component';
import { CardBannerComponent } from './components/card-main/card-banner/card-banner.component';
import { CardDetailsComponent } from './components/card-main/card-details/card-details.component';
import { CardDescrComponent } from './components/card-main/card-descr/card-descr.component';
import { UsersComponent } from './components/card-main/users/users.component';
import { RegisteredComponent } from './components/card-main/registered/registered.component';
import { NoEventComponent } from './components/no-event/no-event.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TagsComponent,
    TagListComponent,
    CardComponent,
    ButtonComponent,
    CardBannerComponent,
    CardDetailsComponent,
    CardDescrComponent,
    UsersComponent,
    RegisteredComponent,
    NoEventComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
