import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

    

import { AppRoutingModule } from './app-routing.module';

import { RouterModule,Routes} from '@angular/router'
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent} from './user/login/login.component';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AppRoutingModule,
    ChatModule,
    HttpClientModule,
    UserModule,
    RouterModule.forRoot([
      {path :'login',component:LoginComponent},
      {path:'' ,redirectTo:'login',pathMatch:'full'},
        {path:'*' , component:LoginComponent},
        {path : '**' ,component:LoginComponent}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
