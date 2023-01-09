import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NamecardComponent } from "./namecard/namecard.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { MatToolbarModule } from "@angular/material";


@NgModule({
  declarations: [
    NamecardComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
],
  exports: [
    NamecardComponent,
    NavBarComponent
  ]
})
export class SharedModule {}