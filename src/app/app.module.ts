import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormsComponent } from './quotes-forms/quotes-forms.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormsComponent,
    QuotesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
