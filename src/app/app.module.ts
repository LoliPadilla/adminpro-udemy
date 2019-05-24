import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { APP_ROUTES } from "./app.routes";

import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./pages/nopagefound/nopagefound.component";
import { RegisterComponent } from "./login/register.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent
  ],
  imports: [FormsModule, PagesModule, BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
