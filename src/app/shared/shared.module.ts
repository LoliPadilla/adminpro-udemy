import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [BreadcrumbsComponent, HeaderComponent, SidebarComponent],
  exports: [BreadcrumbsComponent, HeaderComponent, SidebarComponent]
})
export class SharedModule { }
