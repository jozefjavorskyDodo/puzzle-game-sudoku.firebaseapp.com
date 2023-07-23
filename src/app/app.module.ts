import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { HtmlBodyHeaderComponent } from "./html-body-header/html-body-header.component";
import { HtmlBodyMainComponent } from "./html-body-main/html-body-main.component";
import { HtmlBodyFooterComponent } from "./html-body-footer/html-body-footer.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    HtmlBodyHeaderComponent,
    HtmlBodyMainComponent,
    HtmlBodyFooterComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }