import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FirstCharComponent } from './first-char/first-char.component';
import { FormsModule } from '@angular/forms';
//import { RemoveSpecialCharPipe } from './pipe/remove-special-char.pipe.ts/remove-special-char.pipe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UserDetailsComponent, FirstCharComponent],
  exports:[
    UserDetailsComponent,
    FirstCharComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
