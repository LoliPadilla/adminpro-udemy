import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_ROUTES } from "./app.routes";

import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./pages/nopagefound/nopagefound.component";
import { RegisterComponent } from "./login/register.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule, PagesModule, BrowserModule, APP_ROUTES, ServiceModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
