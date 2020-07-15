import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,

    SignUpComponentComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path:'', component: HomeComponent},
        {path:'sign-up', component: SignUpComponentComponent},
        {path:'sign-in', component: SignInComponent},
        {path:'register', component: RegisterComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
